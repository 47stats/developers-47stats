# Tutorials: チャートとグラフ

## 人口ピラミッド

#### リクエスト (/stats/summary/total)
```JS
(async function() {
    const query = new URLSearchParams({
        database:'KOK', //国調統計データ
        store:'PREF',   //都道府県ストア
        column:[        //列項目
          'N253',       // 0~ 4歳人口・男
          'N254',       // 5~ 9歳人口・男
          'N255',       //10~14歳人口・男
          'N256',       //15~19歳人口・男
...
          'N405',       //85~89歳人口・女
          'N406',       //90~94歳人口・女
          'N407',       //95~99歳人口・女
          'N416',       //100~ 歳人口・女
        ],
        area:"01.02,03.......46,47"
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
<button class='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-path='/stats/summary/total' data-query='{"database":"KOK","store":"PREF","column":["N253","N254","N255","N256","N257","N258","N259","N260","N261","N262","N263","N264","N265","N266","N267","N268","N269","N270","N271","N272","N281","N388","N389","N390","N391","N392","N393","N394","N395","N396","N397","N398","N399","N400","N401","N402","N403","N404","N405","N406","N407","N416"],"area":"01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47"}'>
  サンプル
</button>

<div tabindex="1" id="pyramid" class="hidden"></div>