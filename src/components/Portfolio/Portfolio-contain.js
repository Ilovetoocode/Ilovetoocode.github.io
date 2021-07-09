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
        if(filter === "clear"){
            this.getPortfolioItems();
        }else
        {
            this.getPortfolioItems(filter);
        }
}
getPortfolioItems(filter=null){
    axios
    .get("https://whoami.devcamp.space/portfolio/portfolio_items")
    .then(response => {
        if(filter){
            this.setState({
                data: response.data.portfolio_items.filter(items => {
                    return items.category === filter;
                })
        })
        } else{
            this.setState({
                data: response.data.portfolio_items
        })
    }
    })
    .catch(error => {
    console.log(error);
    });
    }
    Items(){
    return this.state.data.map(items => {
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
            <div className="home">
                <div className="filters">
                <button className="btn" onClick={() => this.handleFilter('Real life')}>IRL</button>
                <button className="btn" onClick={() => this.handleFilter('Web Stuff')}>Web stuff</button>
                <button className="btn" onClick={() => this.handleFilter('Accomplishment')}>Awards</button>
                <button className="btn" onClick={() => this.handleFilter('clear')}>All</button>
                </div>
                <div className="portfolio-items-wrap">
                {this.Items()}
                </div>
                </div>
        )
    }
}