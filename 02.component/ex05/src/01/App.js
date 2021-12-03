import React, {Fragment, useState} from 'react';
import LifeCycle from './LifeCycle';

export default function App() {
    const [color, setColor] = useState('#000');
    return (
        <Fragment>
            <h2>ex05 - Component LifeCycle</h2>
            <button
                // 클릭이 일어나면 칼러를 변경시키는것  만들어서 라이플 서클한테 던진다
                onClick={() => setColor(`#${Math.floor((Math.random() * 0x00ffffff)).toString(16)}`)}>
                색상변경
            </button>
            <br/>
            <LifeCycle color={color}/>
        </Fragment>
    );
}