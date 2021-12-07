import React, {Fragment, useEffect, useState} from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
// css도 컨포넌트 별로 쪼개는 작업
import './assets/scss/App.scss';
//import data from './assets/json/data.json'
export default function(){
    const [emails, setEmails] = useState([]);
    const [keyword, setkeyword] = useState("");

    // 키워드를 담아서 자식이 부모에게 값을 전달해준다
    const notifyKeywordChanged = (keyword) => {
        setkeyword(keyword);
    }

    useEffect(async () => {
        // 페치사용 : 저레벨로 통신 설정을 할수 있음
        try {
            const response = await fetch('http://localhost:8888/api', {
                method: 'get',
                mode: 'cors',                           // 옵션 종류: no-cors, same-origin 이 defult
                credentials: 'same-origin',             // include, omit, same-origin
                cache: 'no-cache',                      // 캐쉬 설정, reload, force-cache(무조건 캐시 하라는 설정), defult(브라우저설정에 따르겠다는거)
                headers: {
                    'Content-Type': 'application/json', // cf, application/x-www-form-urlencoded
                    'Accept': 'application'             // cf, text/html
                },
                redirect: 'follow',                     // 리다이렉트 응답에 대한 설정, 기본:follow(응답을 하지 않고 한번더 요청),error, manual(response.url)
                referrer: 'client',                     // 이전 요청의 url을 알수 있는 referrer , no-referrer, *client
                body: null
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`)
            }
            
            // 응답이 왔다면 다시 json으로 바꿈
            const jsonResult = await response.json();
    
            if(jsonResult.result !== 'success'){
                throw new Error(`${jsonResult.result} ${jsonResult.message}`)
            }
    
            // 문제 없으면 응답으로 온 데이터 값을 set
            setEmails(jsonResult.data);
        } catch(err) {
            console.log(err);
        }

    }, []) // 마운트 후에 등록할꺼기 때문에

    return (
        //  게스트북 입력폰과 게스트북 계시글 리스트
        <div className={'App'}>
            <RegisterForm />
            <Searchbar keyword={keyword} callback={ notifyKeywordChanged }/>
            <Emaillist keyword={keyword} emails={emails}/>
        </div>
  
    )
}