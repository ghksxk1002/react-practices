import React, { Component } from "react";

export default function ListItem({name, quantity}){
    return(
        //넘어온 name과 quantity 를 받으러면 이렇게
        <li>{name} : {quantity}</li>
    )
}