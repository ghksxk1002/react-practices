const path =  require('path');

module.exports = {
    // 처음 의존성 검사를 하는 곳
    mode: "development",
    entry: path.resolve("./src/index.js"),
    output: {
        path: path.resolve("./public"),
        filename: "bundle.js"
    },
    // 데브 서버 설정
    devServer : {
        // 감시해야할 디렉토리
        //contentBase: path.resolve("public"),
        host: '0.0.0.0',
        port: 9999,
        //inline: true,     // 번들js가 끼어들수 있게
        liveReload: true,
        hot: false,
        compress: true    // 압축 설정
    }
}