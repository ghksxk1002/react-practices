const App =function(){

    const app = document.createElement('h1');
    app.textContent = '안농안농안농';

    return app;
};

// 렌더링 부분
document
    .getElementById('root') // 엘리먼트의 아이디 구하고 
    .appendChild(App());    // 그 엘리먼트의 자식 엘리먼트에 App() 함수를 호출해 값 쑤셔넣기