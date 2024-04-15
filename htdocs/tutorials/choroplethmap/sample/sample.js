function createChoroplethMap(callback) {
    // ランクを取得するクエリー
    const query1 = new URLSearchParams({
        database: 'KOK', // 国調統計データ
        store: 'CITY',   //市区町村ストア
        column: 'N1',    //人口
        area: '40',      //福岡県エリア
        division: 7      //ランク7分割
    });

    // 福岡県下の市区町村区界と統計データを取得するクエリー
    const query2 = new URLSearchParams({
        database: 'KOK', // 国調統計データ
        store: 'CITY',   //市区町村ストア
        column: [        //列項目
            `CITY`,       //市区町村コード
            `CITYNAME`,   //市区町村
            `N1`,         //人口
            `N3`,         //男
            `N5`          //女
        ],
        area: '40',      //福岡県エリア
        simplify: true   //ポリゴン簡易化
    });

    const loadFiles = [
        // ランク（該当件数を均等にする）を取得します
        fetch(config.url + `/stats/rank/frequency?${query1}`, {
            headers: { Authorization: config.apikey },
        })
            .then(response => response.json()),
        // 福岡県下の市区町村区界と統計データを取得します
        fetch(config.url + `/map/datamap/polygon/geojson?${query2}`, {
            headers: { Authorization: config.apikey },
        })
            .then(response => response.json()),
    ];

    Promise.all(loadFiles).then(function (data) {
        // 凡例
        const thresholdsNum = [];
        data[0].rank.forEach(element => {
            thresholdsNum.push(element.max);
        });
        const thresholdsColor = ['#FFFFB2', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#B10026'];
        const stepsList = thresholdsNum.map((num, i) => {
            return [num, thresholdsColor[i]];
        });
        stepsList.reverse();

        // data[1].features.forEach((it) => {
        //     it.properties.N1 = parseInt(it.properties.N1);
        //     it.properties.N3 = parseInt(it.properties.N3);
        //     it.properties.N5 = parseInt(it.properties.N5);
        // });

        const legendEl = document.getElementById('legend');
        stepsList.forEach(it => {
            const div = document.getElementById('legend-item');
            const p_prime = div.cloneNode(true);
                p_prime.id = 'legend-item-' + it[0];
            const span = p_prime.querySelectorAll('span');
                span[0].style.background = it[1];
                span[1].appendChild(document.createTextNode(it[0].toLocaleString()));
            legendEl.appendChild(p_prime);
        });
        legendEl.removeChild(document.getElementById('legend-item'));
        stepsList.reverse();

        legendEl.style.visibility = 'visible';
        // コールバック
        callback(data[1], stepsList);
    });
}