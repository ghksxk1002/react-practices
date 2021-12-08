import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    // 라우터가 변경되면 변경된 라우터 값을 새로 렌더링 하기 위해
    // 상태값 지정
    const [route, setRouter] = useState('/');
    
    // 헤쉬체인지 이벤트를 받는 이벤트 함수
    useEffect(()=>{

        // 이벤트가 발생하면 그 해쉬값을 콘솔창에 찍어주는 함수, url 창에 #을 붙여서 썻을때 console.log(window.location.hash);
        const handleHashChange = () => setRouter(window.location.hash.substr(1));

        // 이벤트 하나 걸기, react에서는 jquery를 쓰지 않을 것이기 때문에 
        // DOM API를 잘 알고 쓰자
        window.addEventListener('hashchange', handleHashChange) 


        // 이벤트 해제를 위한 함수 리턴 
        return ()=>{
            window.removeEventListener('hashchange', handleHashChange);
            // 통신 시작 장소
        }
    },[])

    // (<div>{`Hash Route 직접 만들어 보기${route}`}</div>);
    // 함수를 선언과 동시에 선언하는 방법
    return (() => {
        switch(route){
            case '/':
                return <Main />;
            case '/guestbook':
                return <Guestbook />;
            case '/gallery':
                return <Gallery />;
            default:
                return null;
        }
    })(); 

}