import React, { Component } from "react";
import Item from "./Item";

import axios from "axios";

export default class Portfoliocontainer extends Component {
    constructor(){
        super();
this.state = {
    pageTitle:"This is my portfolio",
    data: []
}
this.handleFilter=this.handleFilter.bind(this);
this.getPortfolioItems=this.getPortfolioItems.bind(this)
    }
    
    handleFilter(filter){
        this.setState({
        data: this.state.data.filter(items => {
            return items.category === filter;
        })
         })
}
getPortfolioItems(){
    axios
    .get("https://whoami.devcamp.space/portfolio/portfolio_items")
    .then(response => {
    console.log("response data", response);
    this.setState({
        data: response.data.portfolio_items
    })
    })
    .catch(error => {
    console.log(error);
    });
    }
    Items(){
    return this.state.data.map(items => {
        console.log("item data", items);
        return <Item title={items.name} url={items.url} slug={items.id}/>;
    })
    }
    componentDidMount(){
        this.getPortfolioItems();
    }
    render(){
        if (this.state.isLoading){
            return <div>Loading...</div>
        }
        return (
            <div>
                <h2>Some stuff I have done</h2>
                {this.Items()}
                <button onClick={() => this.handleFilter('Physical')}>Physical</button>
                <button onClick={() => this.handleFilter('Web stuff')}>Web stuff</button>
                <button onClick={() => this.handleFilter('Accomplishment')}>Awards</button>
                <button onClick={() => this.handleFilter('Test4')}>Test4</button>
                </div>
        )
    }
}