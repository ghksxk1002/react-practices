import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import './assets/Form.css';

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [gender, setGender] = useState('female');
    const [birthYear, setBirthYear] = useState('1984');
    const [agreeProv, setAgreeProv] = useState('no');
    
    const onChangeInputName = (e) => {
        //setName(e.target.value); // 값이 일력되면 이벤트가 발생하고, 변화된 상태를 랜더링
        setName(e.target.value.substr(0, 10)); // 값이 일력되면 이벤트가 발생하고, 변화된 상태를 랜더링
    }
    const onChangeInputEmail = (e) => {
        //setName(e.target.value); // 값이 일력되면 이벤트가 발생하고, 변화된 상태를 랜더링
        setEmail(e.target.value); // 값이 일력되면 이벤트가 발생하고, 변화된 상태를 랜더링
        // 정규 표현식 객체 생성
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        setValidEmail(re.test(e.target.value));
    }
    const onChangeInputGender = (e) => {
        setGender(e.target.value);
    }
    const onChangeInputProv = (e) => {
        // API 호출을 하는경우
        const status = (e.target.value === 'no' ? 'yes' : 'no')
        const url = `/prov/agree?status=1`;
        console.log(url);
        if(true) {
            setAgreeProv(status);
        }
    }
    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            <label htmlFor="name">이름</label>
            {/* value={ "" } 로 어트리뷰트를 설정하면 제어가 가능하다 값이 입력되게 하기 위해서 value 지정해주고 컨트롤러를 만들자*/}
            <input 
                id="name" 
                name="name" 
                type="text" 
                value={ name } 
                onChange={ onChangeInputName }/> 

            <label htmlFor="email">이메일</label>
            <input 
                id="email" 
                name="email"
                type="text"
                value={ email }
                onChange={ onChangeInputEmail }/>
                {   
                    email === ''? null :
                    validEmail ? 
                        <FontAwesomeIcon icon={faCheckCircle} style={ {margin:5, fontSize: 16, color: 'blue'}}/>:
                        <FontAwesomeIcon icon={faTimesCircle} style={ {margin:5, fontSize: 16, color: 'red'}}/>
                }


            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" value={ "" } />

            <fieldset>
                <legend>성별</legend>
                <label>여</label> 
                <input 
                    type="radio" 
                    name="gender" 
                    value={ "female" } 
                    onChange={onChangeInputGender} 
                    checked={gender === 'female'} 
                    defaultChecked={ true } />

                <label>남</label> 
                <input 
                    type="radio" 
                    name="gender" 
                    value={ "male" }  
                    onChange={onChangeInputGender} 
                    checked={gender === 'male'} 
                    defaultChecked={ false } />
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select id="birthYear" onChange={e => setBirthYear(e.target.value)} value={ birthYear }>
                <option value='1984'>1984년</option>
                <option value='1985'>1985년</option>
                <option value='1986'>1986년</option>
                <option value='1987'>1987년</option>
                <option value='1988'>1988년</option>
                <option value='1989'>1989년</option>
                <option value='1990'>1990년</option>
            </select>

            <label htmlFor="birthYear">자기소개</label>
            <textarea value={""} />

            <fieldset>
                <legend>약관동의</legend>
                <input  id="agree-prov" 
                        type="checkbox" 
                        name="agreeProv" 
                        value= { agreeProv } 
                        checked={agreeProv === 'yes'} 
                        onChange={ onChangeInputProv } 
                        defaultChecked={ false } />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}