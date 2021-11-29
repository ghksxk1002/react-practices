import React, {Fragment} from 'react';
import GuestBook from './GuestBook';
import GuestBookDialog from './GuestBookDialog';

export default function(){
    return (
        <Fragment>
        {/* 게스트북 입력폰과 게스트북 계시글 리스트 */}
        <div className='App'>
            <GuestBook />
        </div>
        {/* 다이알로그 */}
        <div>
            {/* <GuestBookDialog /> */}
        </div>
        </Fragment>

    )
}