import React from "react";
import TaskList from "./TaskList";
import styles from './assets/scss/Cards.scss';

export default function({title, description, tasks}){  
    //console.log(key);
    return(
        <div className={styles.Card}>
                <div className={styles.Card__Title} >{title}</div>
                <div className={styles.CardCard__Details}>{description}</div>
                    <TaskList tasks={tasks}/>
        </div>
    )

}