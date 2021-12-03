import React, { Fragment, useRef, useState, useEffect } from 'react';

export default function Hook({ color }) {
    const [boxColor, setBoxColor] = useState(null);
    const [title, setTitle] = useState('');
    const h3Ref = useRef(null);

    /**
     *   1. Alternative 01: getDerivedStateFromProps
     */
    if(boxColor !== color ) {
        setBoxColor(color);
    }

    /**
     *   2. After Rendering 함수( 상태의 변화 -> 렌더링 -> 함수)
     *   class component lifecycle(componentDidMount, componentDidUpdate)
     *  렌더링이 되면 무조건 불림
     */
    useEffect(() => {
        console.log('After Rendering');
    });

    /**
     *  3. 어떤 특정 상태(boxColor)의 변화에 반응하는 After Rendering 함수
     *     : 관심 분리 -> 컨포넌트가 다시 렌더링 되는데 특성 상태가 변하면 렌더링
     */
    useEffect(() => {
        console.log('Update Color(DB) Using APIs...');
    }, [title]);

    /**
     *  4. Alternative 02: componentDidMount & componentWillUnmount
     */
    useEffect(() => {
        // 여기서 자원정리를 하면 된다
        console.log('After Mount(componentDidMount)');
        return (function(){
            console.log('After Unmount(componentWillUnmount)');
        });
    }, []); // 위와 같이 배열하나를 리턴하지만 배열을 비워 버리는것

    return (
        <Fragment>
            <h3
                style={ {
                    width: 300,
                    height: 50,
                    backgroundColor: boxColor
                } }
                ref={ h3Ref } />
            <input
                type='text'
                value={ title }
                onChange={ (e) => setTitle(e.target.value) } />
        </Fragment>
    );
}