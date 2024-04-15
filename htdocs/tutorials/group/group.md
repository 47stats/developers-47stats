# Tutorials: 集約データ取得

<a id="circle"></a>

## 円形領域内の集約データを取得

以下のサンプルは、国調データの人口、男、女の集約を取得します。
#### リクエスト (/stats/group/circle)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK', //国調統計データ
        store:'TOWN',   //町丁ストア
        column:[        //列項目
          'N1',         //人口
          'N3',         //男
          'N5'          //女
        ],
        longitude:130.878182,  //北九州市小倉北区船場町付近
        latitude:33.884223,    // 〃
        radius:1000            //1000m圏
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/stats/group/circle?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    });
    const data = await response.json();
    console.log(data.database);
})();
```
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/stats/group/circle' data-query='{"database":"KOK","store":"TOWN","column":["N1","N3","N5"],"longitude":130.878182,"latitude":33.884223,"radius":1000}'>
  サンプル
</button>

## 任意領域内の集約データを取得