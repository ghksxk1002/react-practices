import './assets/scss/App.scss';

// 이걸 컨포넌트로 보자 : Main Controller
const App =function(){

    const app = document.createElement('h1');

    // style loader 사용 : css를 객채로 받아서 처리한 경우
    app.className = 'Header';

    app.textContent = 'hello world!!';

    return app;
};

export {App};