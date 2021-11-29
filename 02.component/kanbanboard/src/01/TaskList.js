import React from "react";
import Task from "./Task";

export default function({tasks}){
    console.log(tasks)
    return (
        <ul> 
            {tasks.map((task)=> <Task
                                    key={task.no} 
                                    name={task.name}/>)}
        </ul>

    )
}