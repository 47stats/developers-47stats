# Tutorials: カタログデータ取得

統計APIが提供する統計データのカタログを取得します。  
統計APIのほとんどで必要とするデータベース種別とデータストアIDを確認します。  
データベース種別やデータストアIDは固定化されているため、必要な種別を確認できたらハードコードでも問題ないでしょう。  

- [データベースのカタログを取得 &rarr;](#database)
- [データストアのカタログを取得 &rarr;](#store)
- [地域のカタログを取得 &rarr;](#area)
- [統計指標のカタログを取得 &rarr;](#column)

<a id="database"></a>

## データベースのカタログの取得
### 情報の取得
- databaseパラメーターは必須です。  
databaseパラメーターは、データベースのカタログ・リストから取得してください。
- versionパラメーターが未指定の場合は、最新年次のカタログ情報が返ってきます。

以下のサンプルは、国調データの最新年次のカタログ情報を取得します。
#### リクエスト (/catalog/database/info)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK' //国調統計データ
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/catalog/database/info?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    });
    const data = await response.json();
    console.log(data.database);
})();
```
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/database/info' data-query='{"database":"KOK"}'>
  サンプル
</button>

<div id="database_info"></div>

### 件数の取得
- パラメーターを指定しない場合、提供するすべてのデータリストの件数が返ってきます。  

以下のサンプルは、提供される国調データの年次リストの件数を取得します。
#### リクエスト (/catalog/database/count)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK' //国調統計データ
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/catalog/database/count?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    })
    const data = await response.json();
    console.log(data.database);
})();
```
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/database/count' data-query='{"databas":"KOK"}'>
  サンプル
</button>

<a id="database-list"></a>

### リストの取得
- パラメーターを指定しない場合、提供するすべてのデータリストが返ってきます。  
先ずは、データベースのカタログ・リストを取得して、何が提供されているかを確認しましょう。  

以下のサンプルは、提供されるすべてのデータベースのカタログリストを取得します。
#### リクエスト (/catalog/database/list)
```JS
(async function() {
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/catalog/database/list`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    })
    const data = await response.json();
    console.log(data.database);
})();
```
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/database/list'>
  サンプル
</button>

<a id="store"></a>

## データストアのカタログを取得
### 情報の取得
- databaseパラメーターは必須です。  
databaseパラメーターは、データベースのカタログ・リストから取得してください。
- storeパラメーターは必須です。  
storeパラメーターは、データストアのカタログ・リストから取得してください。

以下のサンプルは、提供される国調データの町丁データストアのカタログ情報を取得します。
#### リクエスト (/catalog/store/info)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK', //国調統計データ
        store:'TOWN'    //町丁ストア
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/catalog/store/info?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    })
    const data = await response.json();
    console.log(data.database);
})();
```
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/store/info' data-query='{"database":"KOK","store":"TOWN"}'>
  サンプル
</button>

### 件数の取得
- databaseパラメーターは必須です。  
databaseパラメーターは、データベースのカタログ・リストから取得してください。

以下のサンプルは、提供される国調データの年次リストの件数を取得します。
#### リクエスト (/catalog/store/count)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK' //国調統計データ
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/catalog/store/count?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    })
    const data = await response.json();
    console.log(data.database);
})();
```
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/store/count' data-query='{"database":"KOK"}'>
  サンプル
</button>

### リストの取得
- databaseパラメーターは必須です。  
databaseパラメーターは、データベースのカタログ・リストから取得してください。

先ずは、データストアのカタログ・リストを取得して、何が提供されているかを確認しましょう。  
以下のサンプルは、提供される国調データの年次リストを取得します。
#### リクエスト (/catalog/store/list)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK' //国調統計データ
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/catalog/store/list?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    })
    const data = await response.json();
    console.log(data.database);
})();
```
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/store/list' data-query='{"database":"KOK"}'>
  サンプル
</button>


<a id="area"></a>

## 地域のカタログの取得
### 情報の取得
- databaseパラメーターは必須です。  
databaseパラメーターは、データベースのカタログ・リストから取得してください。
- storeパラメーターは必須です。  
storeパラメーターは、データストアのカタログ・リストから取得してください。
- areaパラメーターは必須です。  
areaパラメーターは、地域のカタログ・リストから取得してください。

以下のサンプルは、提供される国調データの地域のカタログ情報を取得します。
#### リクエスト (/catalog/area/info)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK', //国調統計データ
        store:'CITY',   //市区町村ストア
        area:'40106'    //北九州市小倉北区エリア
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/catalog/area/info?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    })
    const data = await response.json();
    console.log(data.database);
})();
```

<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/area/info' data-query='{"database":"KOK","store":"CITY","area":"40106"}'>
  サンプル
</button>

### 件数の取得
- databaseパラメーターは必須です。  
databaseパラメーターは、データベースのカタログ・リストから取得してください。
- storeパラメーターは必須です。  
storeパラメーターは、データストアのカタログ・リストから取得してください。
- areaパラメーターはオプションです。  
areaパラメーターは、地域のカタログ・リストから取得してください。

以下のサンプルは、提供される国調データの福岡県の市区町村の件数を取得します。
#### リクエスト (/catalog/area/count)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK', //国調統計データ
        store:'CITY',   //市区町村ストア
        area:'40'       //福岡県エリア
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/catalog/area/count?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    })
    const data = await response.json();
    console.log(data.database);
})();
```

<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/area/count' data-query='{"database":"KOK","store":"CITY","area":"40"}'>
  サンプル
</button>

### リストの取得
- databaseパラメーターは必須です。  
databaseパラメーターは、データベースのカタログ・リストから取得してください。
- storeパラメーターは必須です。  
storeパラメーターは、データストアのカタログ・リストから取得してください。
- areaパラメーターはオプションです。  
areaパラメーターは、地域のカタログ・リストから取得してください。

以下のサンプルは、提供される国調データの福岡県の市区町村のリストを取得します。
#### リクエスト (/catalog/area/list)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK', //国調統計データ
        store:'CITY',   //市区町村ストア
        area:'40'       //福岡県エリア
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/catalog/area/list?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    })
    const data = await response.json();
    console.log(data.database);
})();
```
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/area/list' data-query='{"database":"KOK","store":"CITY","area":"40"}'>
  サンプル
</button>

> 町丁リスト（store:'TOWN'）を取得する場合は、areaパラメーターに必ず都道府県コードまたは市区町村コードを指定することを推奨します。  
> 指定しないと全国の町丁リスト（約22万以上のレコード）が返ってきます。  
> その際は、start、limitパラメーターを利用してページング方式でレコードを取得する方法があります。

### 分類の取得
- databaseパラメーターは必須です。  
databaseパラメーターは、データベースのカタログ・リストから取得してください。
- storeパラメーターは必須です。  
storeパラメーターは、データストアのカタログ・リストから取得してください。
- classパラメーターはオプションです。  
classパラメーターは、分類の取得で返ってきたclassを設定することで、次の分類を取得できます。

以下のサンプルは、提供される国調データのエリアの都道府県分類リストを取得します。
#### リクエスト (/catalog/column/class)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK', //国調統計データ
        store:'PREF',   //都道府県ストア
        class:'1@'      //分類ID（オプション）
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/catalog/column/class?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    })
    const data = await response.json();
    console.log(data.database);
})();
```

<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/area/class' data-query='{"database":"KOK","store":"PREF"}'>
  サンプル
</button>

> 分類は、大中小...と階層化されています。レスポンスの`leaf`が`true`になるまで、次々と分類を掘り進むことができます。  
> `leaf`が`false`の分類の`class（分類ID）`を、次のリクエストに含めることで、次の分類を取得することができます。

<a id="column"></a>

## 統計指標のカタログを取得
### 情報の取得
- databaseパラメーターは必須です。  
databaseパラメーターは、データベースのカタログ・リストから取得してください。
- storeパラメーターは必須です。  
storeパラメーターは、データストアのカタログ・リストから取得してください。
- columnパラメーターは必須です。  
columnパラメーターは、統計指標のカタログ・リストから取得してください。

以下のサンプルは、提供される国調データの統計指標のカタログ情報を取得します。
#### リクエスト (/catalog/column/info)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK', //国調統計データ
        store:'CITY',   //市区町村ストア
        column:'N1'     //人口
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/catalog/column/info?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    })
    const data = await response.json();
    console.log(data.database);
})();
```

<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/column/info' data-query='{"database":"KOK","store":"CITY","column":"N1"}'>
  サンプル
</button>

### 件数の取得
- databaseパラメーターは必須です。  
databaseパラメーターは、データベースのカタログ・リストから取得してください。
- storeパラメーターは必須です。  
storeパラメーターは、データストアのカタログ・リストから取得してください。

以下のサンプルは、提供される国調データの統計指標の件数を取得します。
#### リクエスト (/catalog/column/count)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK', //国調統計データ
        store:'CITY'    //市区町村ストア
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/catalog/column/count?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    })
    const data = await response.json();
    console.log(data.database);
})();
```

<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/column/count' data-query='{"database":"KOK","store":"CITY"}'>
  サンプル
</button>

### リストの取得
- databaseパラメーターは必須です。  
databaseパラメーターは、データベースのカタログ・リストから取得してください。
- storeパラメーターは必須です。  
storeパラメーターは、データストアのカタログ・リストから取得してください。
- startパラメーターはオプションです。ページング方式用です。  
- limitパラメーターはオプションです。ページング方式用です。

以下のサンプルは、提供される国調データの統計指標のリスト（1～100列）をページング方式で取得します。
#### リクエスト (/catalog/column/list)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK', //国調統計データ
        store:'CITY',   //市区町村ストア
        start:0,        //データ取得開始位置
        limit:100       //データ取得件数制限値
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/catalog/column/list?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    })
    const data = await response.json();
    console.log(data.database);
})();
```

<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/column/list' data-query='{"database":"KOK","store":"CITY","start":0,"limit":100}'>
  サンプル
</button>

### 分類の取得
- databaseパラメーターは必須です。  
databaseパラメーターは、データベースのカタログ・リストから取得してください。
- storeパラメーターは必須です。  
storeパラメーターは、データストアのカタログ・リストから取得してください。

以下のサンプルは、提供される国調データの統計指標の分類リストを取得します。
#### リクエスト (/catalog/column/class)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK', //国調統計データ
        store:'CITY'    //市区町村ストア
    });
    const response = await fetch(`https://<<FQDN>>/api/stats/v1/catalog/column/class?${query}`, {
        headers:{
            Authorization:'<<API認証トークンまたはAPIキー>>'
        }
    })
    const data = await response.json();
    console.log(data.database);
})();
```

<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/column/class' data-query='{"database":"KOK","store":"CITY"}'>
  サンプル
</button>

返ってきたclassを再度パラメーターに設定して、`leaf===true`になるまで繰り返すことで、分類に属するリストを取得できます。
1. class=1@（大分類：人口・世帯）をパラメーターに、再度分類を取得する
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/column/class' data-query='{"database":"KOK","store":"CITY","class":"1@"}'>
  サンプル
</button>
1. class=1@1@（中分類：人口）をパラメーターに、再度分類を取得する（leaf===true）
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/column/class' data-query='{"database":"KOK","store":"CITY","class":"1@1@"}'>
  サンプル
</button>
1. class=1@1@1@（小分類：人口総計）をパラメーターに、統計指標リストを取得する
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/catalog/column/list' data-query='{"database":"KOK","store":"CITY","class":"1@1@1@","start":0,"limit":10}'>
  サンプル
</button>