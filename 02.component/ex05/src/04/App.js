import React, {useState, useEffect, Fragment} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentClockTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
            minutes: minutes,
            seconds: seconds,
            session: hours >= 12 ? "pm" : "am"
        };
    }

    const [currentClockTime, setCurrentClockTime] = useState(getCurrentClockTime());
    const [ticks, setTicks] = useState(0);

    // useEffect(() => {
    //     console.log("setInterval Collded")
    //     setTimeout(function () {
    //         setCurrentClockTime(getCurrentClockTime());
    //         setTicks(ticks+1);
    //     }, 1000);
    // }, [currentClockTime]); //currentClockTime가 변경될때 호출되게 만들수 있음
    
    useEffect(() => {
        console.log("setInterval Collded")
        setInterval(function () {
            setCurrentClockTime(getCurrentClockTime());
            setTicks(ticks+1);
        }, 1000);
    }, []); // 함수 형을 사용할때 [] 이 설정을 해주지 않으면 타이머가 랜더링 할때마다 호출하기 때문에 문제가 dlTEk

    return (

        <Fragment>
            <span>틱틱 : {ticks}</span>
            <Clock
                message={'ex05: useEffect Hook example'}
                hours={currentClockTime.hours}
                minutes={currentClockTime.minutes}
                seconds={currentClockTime.seconds} />
        </Fragment>
    )
}
