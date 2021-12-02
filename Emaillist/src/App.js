import React, {Fragment, useState} from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
// css도 컨포넌트 별로 쪼개는 작업
import './assets/scss/App.scss';
import data from './assets/json/data.json'
export default function(){
    
    const [keyword, setkeyword] = useState("");

    // 키워드를 담아서 자식이 부모에게 값을 전달해준다
    const notifyKeywordChanged = (keyword) => {
        setkeyword(keyword);
    }

    return (
        //  게스트북 입력폰과 게스트북 계시글 리스트
        <div className={'App'}>
            <RegisterForm />
            <Searchbar callback={ notifyKeywordChanged }/>
            <Emaillist keyword={keyword} emails={data}/>
        </div>
  
    )
}