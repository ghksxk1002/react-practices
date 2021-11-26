import React, { Component } from "react";
import ListItem from "./ListItem";

export default class Foodlist extends Component {
    render() {
        return(
        <ul>
        {/* // name과 quantity로 해당 컨포넌트에 값을 넘겨줄수 있음, 나중에는 데이터를 객체와 배열로 가지고 넘길수 있다
                다음 예제로 가라 */}
        <ListItem name='Egg' quantity='10' />
        <ListItem name='Melon' quantity='30' />
        <ListItem name='blood' quantity='5' />
        </ul>
        )
    }
}