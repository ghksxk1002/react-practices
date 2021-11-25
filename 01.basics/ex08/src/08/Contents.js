import React,{Fragment} from "react";
import Clock02 from "./Clock";


// Header 컨포넌트 만들기
export default function() {
    return (
        <Fragment>
        <p>{`JSX Tutorial - Dynamic HTML Rendering`}</p>
        <Clock02 />
        </Fragment>
    )
}