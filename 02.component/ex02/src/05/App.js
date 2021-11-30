import React from 'react';
import styles from './assets/scss/App.scss';

export default function() {
    return (
        <div className={styles.App}>
            <h1 className={styles.Header}>{`SASS & SCSS : SASS-loader module option: {module: false}`}</h1>
        </div>
    )
}