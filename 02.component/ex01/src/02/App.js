import React,{Component}  from 'react';
import Foodlist from './Foodlist';

export default class App extends Component{
    // 통신해서 받았다고 치고
    constructor(){
        // ?
        super(arguments);

        this.foods = [{
            
            no: 1,
            name: "Melon",
            quantity: 10
        },{
            
            no: 2,
            name: "apply",
            quantity: 90
        },{
            
            no: 3,
            name: "Melon01",
            quantity: 880
        }];
    }
    render(){
        return (
            <div id='App'>
            <Foodlist foods={this.foods}/>
        </div>
        )
    }
}