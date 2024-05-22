# Developers 47stats
統計データ配信サービス（47stats API）をご契約いただいたお客様向けに、APIにアクセスする方法を学習するためのサイトです。  
チュートリアルは順次追加される予定です。

## 学習に必要なもの

- 47stats APIにアクセスするためのAPIキー（必須）
- Mapbox GL JSの学習に必要なAPIアクセストークン
- Google Maps APIの学習に必要なAPIキー

```javascript
//htdocs/js/confg.js

var config =
{
    "url":"https://api-stats.47stats.com/api/stats/v1",

    // 47stats API キーを設定してください
    "apikey":"",

    // Google Map API キーを設定してください
    "googlekey":"",

    // Mapbox GL JS キーを設定してください
    "mapboxkey":"",
}
```

### JavaScript Libraries
以下のライブラリは、サンプルの結果を見やすくしたり、振舞いを制御するために利用しました。

- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [Alpine.js](https://alpinejs.dev/)
- [markdown-wasm](https://github.com/rsms/markdown-wasm)
- [simple-datatable](https://github.com/fiduswriter/simple-datatables)
- [D3](https://d3js.org/)

### Map Libraries
以下のライブラリは、マップの振舞いを制御するために利用しました。
- [OpenLayers](https://openlayers.org/)
- [Leaflet](https://leafletjs.com/)
- [MapLibre GL JS](https://maplibre.org/)
- [Mapbox GL JS](https://www.mapbox.com/)
- [Google Maps API](https://developers.google.com/maps?hl=ja)

## プロジェクトを実行する
このプロジェクトで使用されるすべての依存関係をインストールします。

```
$ npm install

//プロジェクト ディレクトリでは、次を実行できます。
$ npm run serve
```
アプリを開発モードで実行します。
[http://127.0.0.1:8000/](http://127.0.0.1:8000/) を開いてブラウザで表示します。

またはVisual Studio CodeにFive Serverにインストールしてプロジェクトを実行します。  
[http://127.0.0.1:8085/](http://127.0.0.1:8085/) を開いてブラウザで表示します。  
ポートの変更は、fiveserver.config.jsを修正してください。