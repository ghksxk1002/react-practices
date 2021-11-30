import React, { useState } from 'react';

// Functional 컨포넌트
// status hock 함수를 통해 리액트에게 관리 넘김
export default function TitelBar02() {
    
    const onClickHandler = () => { 
        // 함수 형이기 때문에 this를 사용할수 없다
        console.log('TitleBar02 Clicked');
    }

    return (
        <h1
            onClick = { onClickHandler }
            style={{cursor:"pointer"}}>
            ex03 - Funcational Event Handler(Functional Component)
        </h1>
    )
}