import React, { Component } from "react"; // Component 는 Class로 컨포넌트를 만들기위해 class가 상속받아야하는 것이다

// Header 컨포넌트 만들기

export default class extends Component{
    // render() 라는 함수를 오버라이드 해서
    render(){
        return (
            <h2>App05</h2>
        );
    }
}