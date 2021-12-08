import React from 'react';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

// 아직 메뉴는 아니다...
export default function App() {
    return (
        // 브라우저 라우터 사용
        //*/
        <HashRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/gallery' element={<Gallery />}/>
                <Route path='/guestbook' element={<Guestbook />}/>
            </Routes>
        </HashRouter>
        /*/
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/gallery' element={<Gallery />}/>
                <Route path='/guestbook' element={<Guestbook />}/>
            </Routes>
        </BrowserRouter>
        //*/
    );
}