import React, { Component } from "react";
import Item from "./Item";
export default class Portfoliocontainer extends Component {
    constructor(){
        super();

        console.log("The container is ready");
    }
    Items(){
    const data=["Lorem", "Ipsum","Sit","Amet"];

    return data.map(items => {
        return <Item title={items}/>;
    })
    }
    render(){
        return (
            <div>
                <h2>Insert content here</h2>
                {this.Item()}
            </div>
        )
    }
}