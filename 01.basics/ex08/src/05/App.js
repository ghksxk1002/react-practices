import React, { Fragment, Component } from 'react'; // Fragment 두개의 컨포넌트를 다른 태그로 둘러싸지 않고 리턴시킬수 있는 컨포넌트다

import Header from "./Header"
import Contents from "./Contents"

export default class extends Component{
    render() {
        return (
            <Fragment>
                <Header />
                <Contents />
            </Fragment>    
        )
    }
}