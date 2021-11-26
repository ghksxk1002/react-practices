import React from "react";
import ListItem from "./ListItem";

export default function FoodList({foods}){
    return(
    <ul>
        {/* 배열안에 컨포넌트 담기 */}
        {foods.map((food) => <ListItem
                                key={food.no}    // 객체에 대한 키값을 넘겨주면 워닝이 안뜸 
                                                 //나중에 컨포넌트가 많아지면 자식에대한 정보가 필요해서 넣어줘야함 
                                name={food.name}
                                quantity={food.quantity}/>)}
    </ul>
    )
};