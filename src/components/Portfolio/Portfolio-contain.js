import React, { Component } from "react";
import Item from "./Item";
export default class Portfoliocontainer extends Component {
    constructor(){
        super();
this.state = {
    pageTitle:"This is my portfolio",
    data: [{title: "Neocities nonesense", category: "Web stuff"}, {title:"My paintings", category:"Physical"},{title: "Youtube",category:"Web stuff"},{title: "Amet",category:"Test4"}]
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
                <h2>Some stuff I have done</h2>
                {this.Items()}
                <button onClick={() => this.handleFilter('Physical')}>Physical</button>
                <button onClick={() => this.handleFilter('Web stuff')}>Web stuff</button>
                <button onClick={() => this.handleFilter('Test3')}>Test3</button>
                <button onClick={() => this.handleFilter('Test4')}>Test4</button>
                </div>
        )
    }
}