// 이걸 컨포넌트로 보자 : Main Controller
const App =function(){

    // const app = document.createElement('h1');
    // app.textContent = '안농안농안농';
    const app = React.createElement('h1', null, 'hello world');
    return app;
};

export {App};