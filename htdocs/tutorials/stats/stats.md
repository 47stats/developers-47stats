# Tutorials: 統計データ取得
統計データをリスト形式で取得します。  
指定の地域下の統計データリストを取得します。

## 統計データリストの取得
- databaseパラメーターは必須です。  
databaseパラメーターは、データベースのカタログ・リストから取得してください。
- storeパラメーターは必須です。  
storeパラメーターは、データストアのカタログ・リストから取得してください。
- columnパラメーターは必須です。  
columnパラメーターは、統計指標のカタログ・リストから取得してください。

レスポンスが非常に大きくなる場合があります。  
先ずは同条件でカウントを取得して、必要であればstart、limitパラメーターの利用を推奨します。

### 抽出条件
area（地域コード）、polygon（ポリゴン座標）を条件にしてデータを抽出できます。  
またfilterを利用することで、指定のデータを条件（N1<1000）に抽出できます。

#### リクエスト (/stats/datalist/list)
```JS
fetch('https://<<FQDN>>/api/stats/v1/stats/datalist/list', {
    headers:{
        Authorization:'<<APIキー>>'
    },
    method:'POST',
    body:JSON.stringify({
        database:'KOK', //国調統計データ
        store:'CITY',   //市区町村単位に取得
        column:[        //統計指標
          `CITY`,       //市区町村コード
          `PREFNAME`,   //都道府県
          `CITYNAME`,   //市区町村
          `N1`,         //人口
          `N3`,         //男
          `N5`          //女
        ],
        area:'40'       //福岡県エリア
    })
})
.then(response => response.json())
.then(data => records = data.dataList)
```

<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/stats/datalist/list' data-query='{"database":"KOK","store":"CITY","column":["CITY","PREFNAME","CITYNAME","N1","N3","N5"],"area":"40"}'>
  サンプル
</button>


## 統計データの取得
統計データを取得します。  

パラメーターや条件等は、上記の統計データリストの取得とほぼ同じですが、APIがrowになります。
指定の地域の統計データを取得します。

#### リクエスト (/stats/datalist/row)
```JS
fetch('https://<<FQDN>>/api/stats/v1/stats/datalist/row', {
    headers:{
        Authorization:'<<APIキー>>'
    },
    method:'POST',
    body:JSON.stringify({
        database:'KOK', //国調統計データ
        store:'CITY',   //市区町村単位に取得
        column:[        //統計指標
          `CITY`,       //市区町村コード
          `PREFNAME`,   //都道府県
          `CITYNAME`,   //市区町村
          `N1`,         //人口
          `N3`,         //男
          `N5`          //女
        ],
        code:['40106']  //小倉北区の市区町村コード
    })
})
.then(response => response.json())
.then(data => records = data.dataList)
```

<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/stats/datalist/row' data-query='{"database":"KOK","store":"CITY","column":["CITY","PREFNAME","CITYNAME","N1","N3","N5"],"code":"40106"}'>
  サンプル
</button>