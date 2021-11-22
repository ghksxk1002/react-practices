const path =  require('path');

module.exports = {
    // 처음 의존성 검사를 하는 곳
    entry: path.resolve("./src/index.js"),
    output: {
        path: path.resolve("./public"),
        filename: "bundle.js"
    }
}