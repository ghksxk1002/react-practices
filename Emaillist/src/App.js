import React, {Fragment} from 'react';
import RegisterForm from './RegisterForm';
// css도 컨포넌트 별로 쪼개는 작업
import './assets/scss/App.scss';

export default function(){
    return (
        //  게스트북 입력폰과 게스트북 계시글 리스트
        <div className={'App'}>
            <RegisterForm />
        </div>
  
    )
}