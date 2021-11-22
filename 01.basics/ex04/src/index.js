// 렌더링 부분
// DOM에서 모듈로 렌더링 되기 위해서는 모듈로 프로그래밍을 해야한다
import {App} from './App.js'

document
    .getElementById('root') // 엘리먼트의 아이디 구하고 
    .appendChild(App());    // 그 엘리먼트의 자식 엘리먼트에 App() 함수를 호출해 값 쑤셔넣기