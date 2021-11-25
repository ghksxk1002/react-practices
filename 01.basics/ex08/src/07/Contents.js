import React,{Fragment} from "react";
import Clock01 from "./Clock01";
import Clock02 from "./Clock02";


// Header 컨포넌트 만들기
export default function() {
    return (
        <Fragment>
        <p>{`JSX Tutorial - 특징 3: JSX 표현식 표기법 "{expression}" 과 문제점`}</p>
        {/*시계를 만들면서 expression의 문제점을 찾아보자 : input 상태변화를 주기 힘들다*/}
        <Clock01 />
        <br /><br />
        <Clock02 />
        </Fragment>
    )
}