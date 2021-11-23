import './assets/scss/App.scss';
import logo from './assts/images/logo.svg'; // 이미지 경로 파일 import 하기

// 이걸 컨포넌트로 보자 : Main Controller
const App =function(){

    const app = document.createElement('h1');

    // style loader 사용 : css를 객채로 받아서 처리한 경우
    app.className = 'App';
    app.innerHTML= '<header></header>';
    return app;
};

export {App};