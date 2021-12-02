import React from 'react';
import styles from './assets/scss/Email.scss';
const Email = ({firstName, lastName, email, keyword}) => {
    console.log(`키워드:${keyword}`);
    return (
        <li className={styles.Email}>
            < a href='' />
                <h4>
                    {email}
                </h4>
                <span>
                    {`${firstName}${lastName}`}
                </span>
        </li>
    );
};

export default Email;