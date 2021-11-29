import React,{Fragment} from "react";
import Card from "./Card";

export default function({title, cards}){  
    //console.log(key);
    return(
        <div className='CardList'>
        <h1 >{title}</h1>
            {/* <!-- Begin: Card: 카드들--> */}
            {cards.map((card)=> <Card 
                                no={card.no}
                                title={card.title}
                                tasks={card.tasks} 
                                description={card.description}/>
            )}
        </div>
    )
}