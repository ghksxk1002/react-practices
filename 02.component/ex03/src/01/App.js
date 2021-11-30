import React from 'react';

export default function () {
    return (
        <h1
            // 인라인 방식으로 이벤트 및 스티일 추가
            onClick={ (e)=>{ console.log('Click') } }      // 함수를 추가
            style={{
                // 커서 모양 지정
                cursor: 'pointer'}}> 
            ex03: Inline Handler</h1>
    );
}