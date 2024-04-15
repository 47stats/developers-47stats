## 準備するもの

<!--
### 47statsのアカウント
統計データにアクセスするためには、47stats APIサービスのアカウントが必要です。  
以下からアカウントを作成し、APIキーを取得してください。

[Account | 47stats](https://47stats.com/)
-->

### APIキーとAPI認証トークン
#### APIキー
APIキーの取得は、弊社にお問い合わせください。  
<!--
- ユーザーがマイページで発行し保管するもの（複数作成可）  
- IPアドレスやリファラを使ってアクセス制限することができる
-->
##### 用途
- Authorizationヘッダーに埋め込んで、47stats APIを利用します
    - 主にクライアントサイドで利用します
##### セキュリティ対策
- IPアドレスやリファラでアクセス制限できます
- API認証トークンを利用することで、外部からAPIキーを秘匿できます

#### API認証トークン
- APIキーを使用して発行する一時的な認証キー
##### 用途
- APIキーからAPI認証トークンを要求して、47stats APIを利用します
    - 主にサーバサイドで利用します
##### セキュリティ対策
- IPアドレスやリファラでアクセス制限できます
- 利用有効期間を設定できます（最大24時間）

### APIキーとAPI認証トークンの利用方法
#### サーバープログラムなし
1. 利用するAPIキーに、IPアドレスやリファラでアクセス制限します（推奨）
2. 制限を付与したAPIキーを使って、47stats APIを利用します

APIキーは公開しても構いませんが、必ずIPアドレスやリファラを設定して制限してください。

#### サーバープログラムあり
1. 47stats APIサービスにAPIキーからAPI認証トークンを要求します
2. 取得したAPI認証トークンを使って、47stats APIを利用します

APIキーは公開しないよう注意してください。


### サーバープログラムがないときの手続き
`Developers 47stats`は、サーバープログラムはありません。  
このためAPIキーはスクリプト内に記述されていますが、IPアドレスやリファラでアクセス制限されています。  
下記サンプル（クライアントサイド）を参照してください。  
<<API認証トークン>>の箇所は、アクセス制限付きの<<APIキー>>になります。

#### サンプル（curl）
```bash
curl -H "Authorization: <<APIキー>>" <<47stats APIサービス>>
```

### サーバープログラムがあるときの手続き
API認証トークンを使用して、47stats APIサービスを利用します。
このAPI認証トークンをヘッダーに埋め込むことで、47stats APIにアクセスできます。  
APIキーは外部に漏れないよう注意してください。  
このAPIキーにIPアドレスやリファラを制限することで、より強固なセキュリティを担保できます。

#### サンプル（サーバーサイド）
```Java
/** Java */
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.module.afterburner.AfterburnerModule;
...

//外部に漏れないよう注意
@Value("${<<APIキー>>}")
private String apikey;

final String url = String.format("<<47stats API>>/auth?apikey=%s", apikey);
final RestTemplate restTemplate = new RestTemplate();
final String json = restTemplate.getForObject(url, String.class);

final ObjectMapper mapper = new ObjectMapper();
mapper.registerModule(new AfterburnerModule());
mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

final Map<String, Object> resultMap = mapper.readValue(json, new TypeReference<Map<String, Object>>() {});
final String accessToken;
if ("success".equals(resultMap.get("status"))) {
    //認証に成功したら、API認証トークンが返ってくる
    //このAPI認証トークンを使って47stats APIサービスにアクセスする
    accessToken = resultMap.get("authorization").toString();
} else {
    Validate.notNull(/** エラーメッセージ */);
}
```

#### サンプル（クライアントサイド）
- awaitの書き方
```JS
(async function() {
    /////////////////
    //GET
    const query = new URLSearchParams({/**パラメーター*/});
    const response = await fetch(`<<47stats API>>?${query}`, {
        headers: {
            Authorization:<<API認証トークン>>
        }
    });
    const data = await response.json();
    console.log(data);

    /////////////////
    //POST
    const response = await fetch('<<47stats API>>', {
        headers:{
            Authorization:<<API認証トークン>>
        },
        method:'POST',
        body:JSON.stringify({/**パラメーター*/})
    });
    const data = await response.json();
    console.log(data);
})();
```
- promiseの書き方
```JS
    /////////////////
    //GET
    const query = new URLSearchParams({/**パラメーター*/});
    fetch(`<<47stats API>>?${query}`, {
        headers: {
            Authorization:<<API認証トークン>>
        }
    })
    .then(response => response.json)
    .then(data => console.log(data))

    /////////////////
    //POST
    fetch('<<47stats API>>', {
        headers:{
            Authorization:<<API認証トークン>>
        },
        method:'POST',
        body:JSON.stringify({/**パラメーター*/})
    });
    .then(response => response.json)
    .then(data => console.log(data))
```

47stats APIは、GET/POSTいずれの形式でも、リクエストできます。  
パラメーターのサイズが、GETの制限を超えるようでしたら、POST形式を利用してください。  