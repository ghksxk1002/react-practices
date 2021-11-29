import React from "react";

export default function({name}){
    return (
        <li className='TaskList__Task' >
            <input type='checkbox' defaultChecked='true'/>
            {name}
            <a href='#' className='TaskList__Task--remove'></a>
        </li>
    )
}