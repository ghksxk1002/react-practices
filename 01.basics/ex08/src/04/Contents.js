import React from "react";

// Header 컨포넌트 만들기
export default function() {
    return (
        //<p>JSX Tutorial - 특징3: Pure(DOM API) React API로 함수 컨포넌트 작성</p>
        React.createElement('p', null, 'JSX Tutorial - 특징3: Pure(DOM API) React API로 함수 컨포넌트 작성')
    );
}