import React from 'react';
import './assets/Form.css';

// 통으로 발리데이션을 하고 싶을때
export default function Form() {
    const onSubmit = (e) => {
        e.preventDefault()

        // 태그의 name으로 값을 찾아와서
        console.log(e.target.email.value, ":", e.target.password.value);

        // ajax 로그인
    }

    return (
        <form
            id="loginForm"
            name="loginForm"
            method="post"
            action="/do/not/post"
            onSubmit={onSubmit}> 
            <label htmlFor="email">이메일</label>
            <input
                id="email"
                name="email"
                type="text" />

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" />

            <input type="submit" value="로그인" />
        </form>
    );
}