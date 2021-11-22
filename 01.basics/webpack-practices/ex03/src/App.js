// 이걸 컨포넌트로 보자 : Main Controller
const App =function(){

    const app = document.createElement('h1');
    app.textContent = 'hello world!!';

    return app;
};

export {App};