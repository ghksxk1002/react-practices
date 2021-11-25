ex08: JSX Tutorials

01. props(property) 
  


02. 특징 2: Single Root node
03. 함수 컨포넌트 만들기
04. Pure(DOM API) React API로 함수 컨포넌트 작성
05. 클래스 컨포넌트 만들기
06. 특징 3: JSX 표현식 표기법 {expression} 과 문제점
07. 득징 4: 공백
08. Dynamic HTML Rendering
09. Comment

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