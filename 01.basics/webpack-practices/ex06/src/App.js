import './assets/scss/App.scss';
import logo from './assets/images/logo.svg'; // 이미지 경로 파일 import 하기

// 이걸 컨포넌트로 보자 : Main Controller
const App =function(){

    const app = document.createElement('div');  // scss 가 먹는다
    app.className = 'App';
    app.innerHTML= // 로더가 경로의 이미지를 hash로 url을 만들어서 logo에 떨궈준다
        `<header class='App-header'>
            <img src='${logo}' class='App-logo' alt='logo'/>   
            <p>Hello World</p>
        </header>`;
    return app;
};

export {App};