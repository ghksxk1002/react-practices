ex08: JSX Tutorials

01. props(property) 



02. foodList src/01 : 클래스 컨포넌트
03. foodList src/02 : Data Flow(top-<down) :  클래스 컨포너느
04. foodList src/03 : Data Flow(top-down)  :  함수 컨포넌트
05. 클래스 컨포넌트 만들기
06. foodList src/04 : validation
  

설치:
$ npm i -D webpack webpack-cli webpack-dev-server babel-loader style-loader css-loader sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom

설정:
babel: babel.config.json
webpack.: webpack.config.js

package.json의 스크립트 추가 하기
  "scripts": {
    "debug": "npx webpack server --progress --mode development --evn",
    "build": "npx webpack --mode producion"
  },

실행 : npm rub debug src=(실행할 예제)