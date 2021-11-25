import React, { Fragment } from 'react'; // Fragment 두개의 컨포넌트를 다른 태그로 둘러싸지 않고 리턴시킬수 있는 컨포넌트다

import Header from "./Header"
import Contents from "./Contents"

export default function(){
    return (
        // <Fragment>
        //     <Header />
        //     <Contents />
        // </Fragment> 
        React.createElement(
            Fragment, null, 
            React.createElement(Header, null), 
            React.createElement(Contents, null))
    )
}