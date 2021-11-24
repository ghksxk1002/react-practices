ex07: CRA(create react app)로 만든 Application을 직접 설정 해서 똑같이 만들어 보장
설치:
$ npm i -D webpack webpack-cli webpack-dev-server babel-loader style-loader css-loader sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom

설정:
babel: babel.config.json
webpack.: webpack.config.js

package.json의 스크립트 추가 하기
"scripts": {
    "start": "npx webpack server --progress",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx webpack"
},