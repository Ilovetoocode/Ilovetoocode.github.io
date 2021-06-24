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
        return (
        <Item key={items.id}
           items={items}/>);
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
                <div className="portfolio-items-wrap">
                <button className="btn" onClick={() => this.handleFilter('Real life')}>IRL</button>
                <button className="btn" onClick={() => this.handleFilter('Web Stuff')}>Web stuff</button>
                <button className="btn" onClick={() => this.handleFilter('Accomplishment')}>Awards</button>
                {this.Items()}
                </div>
        )
    }
}