import React,{Fragment} from "react";

export default function() {
    
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const sec = date.getSeconds();




    return (
        /**
         *  comment01 : 여기는 컨포넌트 안이기 때문에 자바스크립트 구문이 가능하다.
         */

        <Fragment>
        <div
            /**
             *  comment02: 시작 태그안에도 주석을 달수 있다 강사님 비추
             */
            className='clock'
            title='시계'
            porp01=''>
            {/**
             *   JSX는 HTML이 아니다 <!-- --> 이 주석도 사용할수 없다
             */}

            // comment: JSX 안에서의 주석을 사용하면 그대로 나온다.
            {('0'+(hours>12 ? hours - 12 : hours)).slice(-2)}시
            {' '}
            {/* comment04: 이런 방식으로 표현식이 실행되는 블록안에 주석을 달아야 한다. */}
            {('0'+minutes).slice(-2)}분 
            {' '}
            {('0'+sec).slice(-2)}초 
            {' '}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
        </Fragment>
    )
}