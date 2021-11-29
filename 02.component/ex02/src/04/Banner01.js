import React from "react";
// 모듈화를 위한 css 파일 헤싱화
import styles from './assets/css/Banner01.css';

export default function() {
    return (
      <h1 className={styles.Header}>Hello React</h1>
    )
}