import React, { Component } from "react";
import Item from "./Item";
export default class Portfoliocontainer extends Component {
    constructor(){
        super();
this.state = {
    data: [{title: "Lorem" }, {title:"Ipsum"},{title: "Sit"},{title: "Amet"}]
}
    }
    Items(){
    return this.state.data.map(items => {
        return <Item title={items.title}/>;
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