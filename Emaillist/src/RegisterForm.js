import React, {Fragment} from 'react';
// css도 컨포넌트 별로 쪼개는 작업
import styles from './assets/scss/RegisterForm.scss';

export default function(){
    return (
            <form className = {styles.RegisterForm}>
                <input type = 'text' placeholder='성' className =  {styles.InputFirstName} />
                <input type = 'text' placeholder='이름' className =  {styles.InputLastName} />
                <input type = 'text' placeholder='이메일' className =  {styles.InputEmail} />
                <input type = 'submit' value='등록' />
            </form>
    )
}