import React from "react";
import ListItem from "./ListItem";

export default function FoodList({foods}){
    return(
    <ul>
        {/* 배열안에 컨포넌트 담기 */}
        {foods.map((food) => <ListItem
                                key={food.no}     
                                name={food.name}
                                quantity={food.quantity}/>)}
    </ul>
    )
};