import React, { Component } from "react";
import ListItem from "./ListItem";

export default class Foodlist extends Component {
    render() {
        // 배열 생성하기
        const components =[];
        // const foods = this.props.foods
        // for(let i=0; i <foods.length;i++){
        //     components[i] = <ListItem name={foods[i].name} quantity={foods[i].quantity}/>;
        // }

        // const r =[1,2,3,4].map(function(e){
        //     return e*e;
        // });

        // const r =this.props.foods.map((foods) => <ListItem name={foods.name} quantity={foods.quantity}/>);
        // console.log(r);
        return(
        <ul>
            {/* 배열안에 컨포넌트 담기 */}
            {this.props.foods.map((foods, index) => <ListItem 
                                                    no={index}
                                                    name={foods.name}
                                                    quantity={foods.quantity}/>)}
        </ul>
        )
    }
}