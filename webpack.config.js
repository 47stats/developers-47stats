const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");

module.exports = {
    mode: "production", // production or development
    entry: './htdocs/src/application.js' ,
    output: { path: __dirname + "/htdocs/bundle" , filename: "application.bundle.js" },
    target: ["web", "es6"],
    plugins: [
        new CompressionPlugin({
            filename: "[path][base].brotli",
            algorithm: "brotliCompress",
            test: /\.js$/,
            compressionOptions: {
                params: {
                    [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
                },
            },
        })
    ]
};
