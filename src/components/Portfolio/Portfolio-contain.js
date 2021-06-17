import React, { Component } from "react";
import Item from "./Item";
export default class Portfoliocontainer extends Component {
    constructor(){
        super();
this.state = {
    pageTitle:"This is my portfolio",
    data: [{title: "Lorem", category: "Test1"}, {title:"Ipsum", category:"Test2"},{title: "Sit",category:"Test3"},{title: "Amet",category:"Test4"}]
}
this.handleFilter=this.handleFilter.bind(this);
    }
    
    handleFilter(filter){
        this.setState({
        data: this.state.data.filter(items => {
            return items.category === filter;
        })
         })
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
                <button onClick={() => this.handleFilter('Test1')}>Test1</button>
                <button onClick={() => this.handleFilter('Test2')}>Test2</button>
                <button onClick={() => this.handleFilter('Test3')}>Test3</button>
                <button onClick={() => this.handleFilter('Test4')}>Test4</button>
                </div>
        )
    }
}