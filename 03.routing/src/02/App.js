import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: '/'});

    useEffect(() => {
        const handlePopState = (e) => setRoute(e.state); // 상태를 저장해줘야함!

        window.addEventListener('popstate', handlePopState);
        return () => { //unmount
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, []);
    
    const handleLinkClick = (e) => {
        e.preventDefault();

        // 윈도우의 url 빼오기
        // substr을 이용해 뒤에서 부터 내가쓸 url 빼오기
        const url = e.target.href.substr(e.target.href.lastIndexOf('/'));
        // 히스토리에 사용할 객체 담기 스택이여서 push를 쓴다. 
        // 뒤로가기 기능 가능: 뒤로가기를 누르면 popstate 이벤트가 발생한다 
        // 
        window.history.pushState({page: url}, e.target.text, url);
        
        setRoute({page:url});
    }

    const router = function () {
        let component = null;
        switch (route.page) {
            case '/':
                component = <Main/>;
                break;
            case '/gallery':
                component = <Gallery/>;
                break;
            case '/guestbook':
                component = <Guestbook/>;
                break;
        }

        return component;
    };

    return (
        <div>
            {(() => {
                    switch(route.page){
                        case '/':
                            return <Main />;
                        case '/guestbook':
                            return <Guestbook />;
                        case '/gallery':
                            return <Gallery />;
                        default:
                            return null;
                    }
                })()}
            <div>{`${route.page}`}</div>
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
        </div>
    )
}