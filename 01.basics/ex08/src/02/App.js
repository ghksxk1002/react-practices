import React from 'react';

export default function(){
    /**
     *  react 컨포넌트는 단일 root 노드만 randing 할 수 있따
     *      오류) 
     *      <h2>App02</h2>
     *      <p>JSX Tutorial - 특징 2: Single Root node</p>
     *          -- div 태그없이 두개를 리턴할때 예러임
     */
    return (
        <div id="App">
            <h2>App02</h2>
            <p>JSX Tutorial - 특징 2: Single Root node</p>
        </div>
    )
}