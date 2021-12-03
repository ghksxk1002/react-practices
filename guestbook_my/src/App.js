import React, {Fragment} from 'react';
import GuestBook from './GuestBook';
import styles from './assets/styles.css';

export default function(){
    return (
        //  게스트북 입력폰과 게스트북 계시글 리스트
        <div className={styles.App}>
            <GuestBook />
        </div>

    )
}