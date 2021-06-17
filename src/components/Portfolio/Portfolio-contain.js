import React, { Component } from "react";
import Item from "./Item";
export default class Portfoliocontainer extends Component {
    constructor(){
        super();

        console.log("The container is ready");
    }
    render(){
        return (
            <div>
                <h2>Insert content here</h2>
                <Item />
            </div>
        )
    }
}