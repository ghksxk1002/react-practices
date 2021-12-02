import React from "react";
import Task from "./Task";
import styles from "./assets/css/taskList.css"
export default function({tasks}){
    console.log(tasks)
    return (
        <div className='TaskList'>
            <ul> 
            {tasks.map((task)=> <Task
                                    key={task.no} 
                                    name={task.name}/>)}
            </ul>
            <input 
                type='text'
                className={styles['TaskList--add-task']} 
                placeholder='태스크 추가'/>
        </div>

    )
}