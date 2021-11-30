import React, { useRef } from 'react';
import './assets/scss/App.scss';

export default function App() {
    const outterRef = useRef(null);
    const innerRef = useRef(null);

    const Scoll = () => {
        let st = outterRef.current.scrollTop;
        let ot = outterRef.current.clientHeight;
        let top = innerRef.current.clientHeight;

        if(top == (st+ot)){
            console.log("닿았다")
        }

    }

    return (
        <div
            ref={ outterRef }
            className={'App'}
            onScroll={ Scoll } >
            <div
                ref={ innerRef }>
                <ul>
                    {/* 객체에다가 유사객체를 만든후 길이는 100, 
                        그리고 뒤에 map 함수를 써서 1에서 부터 100 까지의 배열을 만든것 */}
                    { Array.from({length: 100}, (e, i) => i+1).map(i =>
                        <li key={i}>
                            { `아이템 ${i} 입니다.` }
                        </li>
                    ) }
                </ul>
            </div>
        </div>
    );
}