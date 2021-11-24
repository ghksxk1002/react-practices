import React from 'react';
// 이걸 컨포넌트로 보자 : Main Controller
const App =function(){
    // const app = React.createElement('h1', null, 'hello world');
    // return app; 

    // 처리할 값이 왔다고 치고
    const message = "안농안농여러분"
    
    // 렌더링 하는 부분 리턴
    // 프리셋 리엑트가 React.createElement('h1', null, 'hello world'); 이내용을 ?
    return (
        <div>
            <h1>{`${message} : 하하하하`}</h1>
        </div>
    );
};

export {App};