import React, {useState} from 'react';

export default function ({ begin, step }) { // 함수형 컨포넌트이기 때문에 파라미터로 프로포티를 받고
    // 초기값 지정
    const [stateVal, setVal] = useState(begin); 

    

    return (
        <div>
            <button onClick={(e) => {
                setVal(stateVal + step);
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <button>
            <strong>-</strong>
            {' '}
            </button>
            <span>{ stateVal }</span>
        </div>
    );
}