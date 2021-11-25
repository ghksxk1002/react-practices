import React,{Fragment} from "react";

export default function() {
    
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const sec = date.getSeconds();



    return (
        <Fragment>
            {('0'+(hours>12 ? hours - 12 : hours)).slice(-2)}시
            {' '} 
            {('0'+minutes).slice(-2)}분 
            {' '}
            {('0'+sec).slice(-2)}초 
            {' '}
            {hours > 12 ? 'PM' : 'AM'}
        </Fragment>
    )
}