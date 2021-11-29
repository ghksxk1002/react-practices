import React from "react";

export default function({tasks}){
    console.log(tasks)
    return (
        <ul> 
            {tasks.map((e, i)=>
                <li className='TaskList__Task'>
                    <input type='checkbox' defaultChecked=''/>
                    {e.name}
                    <a href='#' className='TaskList__Task--remove'></a>
                </li>
            )}
        </ul>

    )
}