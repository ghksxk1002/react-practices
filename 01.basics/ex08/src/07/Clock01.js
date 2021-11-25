import React,{Fragment} from "react";

export default function() {
    
    const date = new Date();

    let hours = date.getHours();
    let minutes = ('0'+date.getMinutes()).slice(-2);
    let sec = ('0'+date.getSeconds()).slice(-2);

    let session = 'AM';
    if(hours > 12) {
        session ='PM';
    }

    hours = ('0' + hours).slice(-2);

    return (
        <Fragment>
            {hours}시 {minutes}분 {sec}초 {session}
        </Fragment>
    )
}