# Tutorials: 集計データ取得

- [統計データの平均値を取得](#average)
- [統計データの件数を取得](#count)
- [統計データの最大値を取得](#max)
- [統計データの最小値を取得](#min)
- [統計データの標準偏差を取得](#stdev)
- [統計データの合計値を取得](#total)

<a id="average"></a>

## 統計データの平均値を取得

以下のサンプルは、国調データの人口、男、女の平均値を取得します。
#### リクエスト (/stats/summary/average)
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
        area:'40106'    //北九州市小倉北区エリア
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/stats/summary/average?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    });
    const data = await response.json();
    console.log(data.database);
})();
```
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/stats/summary/average' data-query='{"database":"KOK","store":"TOWN","column":["N1","N3","N5"],"area":"40106"}'>
  サンプル
</button>

<a id="count"></a>

## 統計データの件数を取得

以下のサンプルは、国調データの人口、男、女の値を含むレコード件数を取得します。
#### リクエスト (/stats/summary/count)
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
        area:'40106'    //北九州市小倉北区エリア
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/stats/summary/count?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    });
    const data = await response.json();
    console.log(data.database);
})();
```
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/stats/summary/count' data-query='{"database":"KOK","store":"TOWN","column":["N1","N3","N5"],"area":"40106"}'>
  サンプル
</button>

<a id="max"></a>

## 統計データの最大値を取得

以下のサンプルは、国調データの人口、男、女の最大値を取得します。
#### リクエスト (/stats/summary/max)
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
        area:'40106'    //北九州市小倉北区エリア
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/stats/summary/max?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    });
    const data = await response.json();
    console.log(data.database);
})();
```
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/stats/summary/max' data-query='{"database":"KOK","store":"TOWN","column":["N1","N3","N5"],"area":"40106"}'>
  サンプル
</button>

<a id="min"></a>

## 統計データの最小値を取得

以下のサンプルは、国調データの人口、男、女の最小値を取得します。
#### リクエスト (/stats/summary/min)
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
        area:'40106'    //北九州市小倉北区エリア
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/stats/summary/min?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    });
    const data = await response.json();
    console.log(data.database);
})();
```
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/stats/summary/min' data-query='{"database":"KOK","store":"TOWN","column":["N1","N3","N5"],"area":"40106"}'>
  サンプル
</button>

<a id="stdev"></a>

## 統計データの標準偏差を取得

以下のサンプルは、国調データの人口、男、女の標準偏差を取得します。
#### リクエスト (/stats/summary/stdev)
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
        area:'40106'    //北九州市小倉北区エリア
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/stats/summary/stdev?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    });
    const data = await response.json();
    console.log(data.database);
})();
```
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/stats/summary/stdev' data-query='{"database":"KOK","store":"TOWN","column":["N1","N3","N5"],"area":"40106"}'>
  サンプル
</button>

<a id="total"></a>

## 統計データの合計値を取得

以下のサンプルは、国調データの人口、男、女の合計値を取得します。
#### リクエスト (/stats/summary/total)
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
        area:'40106'    //北九州市小倉北区エリア
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/stats/summary/total?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    });
    const data = await response.json();
    console.log(data.database);
})();
```
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/stats/summary/total' data-query='{"database":"KOK","store":"TOWN","column":["N1","N3","N5"],"area":"40106"}'>
  サンプル
</button>