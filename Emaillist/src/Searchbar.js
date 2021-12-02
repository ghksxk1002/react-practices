import React, { useState } from 'react';
import styles from './assets/scss/Searchbar.scss';

const Searchbar = ({callback}) => {
    const [keyword, setkeyword] = useState('');

    const onInputKeyword = (e) =>{
        setkeyword( e.target.value );
        callback(e.target.value);
    }

    return (
        <div className={styles.Searchbar}>
            찾기: <input 
                        type='text' 
                        placeholder='찾기' 
                        value={keyword}
                        onChange={onInputKeyword}/>
        </div>
    );
};

export default Searchbar;