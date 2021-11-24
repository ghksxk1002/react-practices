// 렌더링 부분
// DOM에서 모듈로 렌더링 되기 위해서는 모듈로 프로그래밍을 해야한다
import ReactDom from 'react-dom';
import {App} from './App.js'

// App라는 컨포넌트를 호출해서 DOM에 render
ReactDom.render(App(), document.getElementById('root'));