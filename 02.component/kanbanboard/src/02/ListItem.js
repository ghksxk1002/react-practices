import React, { Component } from "react";

export default class ListItem extends Component {
    render() {
        return(
            //넘어온 name과 quantity 를 받으러면 이렇게
            <li>{this.props.name} : {this.props.quantity}</li>
        )
    }
}