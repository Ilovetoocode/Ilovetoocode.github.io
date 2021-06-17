import React, { Component } from "react";
import Item from "./Item";
export default class Portfoliocontainer extends Component {
    constructor(){
        super();
this.state = {
    pageTitle:"This is my portfolio",
    data: [{title: "Lorem" }, {title:"Ipsum"},{title: "Sit"},{title: "Amet"}]
}
this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
    }
    Items(){
    return this.state.data.map(items => {
        return <Item title={items.title}/>;
    })
    }
    handlePageTitleUpdate(){
        this.setState({
            pageTitle:"AAAAAAAAAAAA"
        })
    }
    render(){
        return (
            <div>
                <h2>Insert content here</h2>
                {this.Item()}
                <hr/>
                <button onClick={this.handlePageTitleUpdate}>Change the name</button>
            </div>
        )
    }
}