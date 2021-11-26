import React from "react";
import cards from "./data.json";
import './assets/styles.css';

export default function(){
    console.log(cards);

    // filter 가 card의 status가 Todo인 카트를 리턴해서 a에 배열로 리턴해 준다.
    const a= cards.filter((card) => card.status === 'ToDo') 
    console.log(a);
    return (
        
        <div className='KanbanBoard'>
            
            <CardList key='Todo' cards={cards.filter((card) => card.status === 'Todo')}/>
            <CardList key='Doing'cards={cards.filter((card) => card.status === 'Doing')}/>
            <CardList key='Done' cards={cards.filter((card) => card.status === 'Done')}/>
            칸반보드
        </div>
    )
}