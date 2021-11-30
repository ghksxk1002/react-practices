import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';

// ref : native DOM을 직접 참조해서 사용하고 싶을때 사용
export default function App() {
    const imageRef = useRef(null);

    const onKeyPressInput = (e) => {
        // 엘리먼트의 키가 Enter일때 그 엘리먼트의 값을 출력
        if(e.key=='Enter'){
            console.log(e.target.value)
        }
    }

    const onFocusInput = (e) => {
        // 포커스된 일레먼트가 있을때
        console.log('focused!!')
    }

    const onBlurInput = (e) => {
        console.log('blur!!');
    }

    const onMouseOverImage = (e) => {
        // 마우스가 이미지 위에 올라갔을떼 그 좌표를 찍는 이벤트
        // React에 없는 DOM API를 사용하기 위해 ref에 접근
        console.log('mousemove', `x=${e.clientX} y=${e.clientY}`)
        
    }

    const onMouseMoveImage = (e) => {
        // 마우스가 이미지 위서 움직이는동안 그 좌표를 찍는 이벤트
        const offsetTop = imageRef.current.offsetTop;
        const offsetleft = imageRef.current.offsetleft;
        console.log('mouseover', `x=${e.clientX-offsetleft} y=${e.clientY-offsetTop}`)
    }

    const onMouseOutImage = (e) => {
        // 마우스가 이미지를 빠져나갔을때 그 좌표를 찍는 이벤트
        console.log('mouseout', `x=${e.clientX} y=${e.clientY}`)
    }

    const onMouseDownImage = (e) => {
        // 마우스가 이미지를 빠져나갔을때 그 좌표를 찍는 이벤트
        console.log('mousedown', `x=${e.clientX} y=${e.clientY}`)
    }

    const onMouseUpImage = (e) => {
        // 마우스가 이미지를 빠져나갔을때 그 좌표를 찍는 이벤트
        console.log('mouseup', `x=${e.clientX} y=${e.clientY}`)
    }

    const onClickImage = (e) => {
        // 마우스가 이미지를 빠져나갔을때 그 좌표를 찍는 이벤트
        console.log('mouseclick', `x=${e.clientX} y=${e.clientY}`)
    }

    const onDoubleClickImage = (e) => {
        // 마우스가 이미지를 빠져나갔을때 그 좌표를 찍는 이벤트
        console.log('mouseout', `x=${e.clientX} y=${e.clientY}`)
    }
    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } 
                />
                <br/>
                <br/>
            <img
                ref={ imageRef } // native DOM에있는 엘리먼트를 React DOM에 세팅해주는 작업 이제 React DOM에 접근해서 사용하면 된다
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                
                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }
                />
        </Fragment>
    );
}