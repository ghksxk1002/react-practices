import React,{Fragment} from 'react';
import Banner01 from './Banner01';
import Banner02 from './Banner02';
 
export default function() {
    // 인라인으로 스타일링시 두 컨포넌트의 CSS 의 className 이 동일한 문제가 발생
    // CSS가 컨포넌트에 종속되는 작업이 필요하다(CSS의 모듈화필요)
    return (
        <Fragment>
            <Banner01 />
            <Banner02 />
        </Fragment>
    )
}