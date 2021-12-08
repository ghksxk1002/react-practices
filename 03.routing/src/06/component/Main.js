import React, {Fragment} from 'react';
import styles from '../assets/scss/component/Main.scss';
import SiteLayout from '../layout/StieLayout';

export default function Main() {
    return (
        <SiteLayout>
            {/* 자식에서 프로퍼티를 받지 않아도 이 컨포넌트가 자동으로 자식으로 등록해서 부모에 셋팅해줌 */}
            <div className={styles.Main}>
                <h2>Main</h2>
            </div>
        </SiteLayout>
    );
}