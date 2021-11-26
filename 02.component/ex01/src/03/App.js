import React from 'react';
import Foodlist from './Foodlist';

export default function(){
    // 통신해서 받았다고 치고
    const foods = [{ 
            no: 1,
            name: "Melon03",
            quantity: 10
        },{
            no: 2,
            name: "apply",
            quantity: 90
        },{
            no: 3,
            name: "Melon01",
            quantity: 880
        }]
    return (
        <div id='App'>
            <Foodlist foods={foods}/>
        </div>
    )
}