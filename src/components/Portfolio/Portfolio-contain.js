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
    })
    .catch(error => {
    console.log(error);
    });
    }
    Items(){
    return this.state.data.map(items => {
        return <Item title={items.title} slug={items.slug}/>;
    })
    }
    portfolioitems(){
        return this.state.data.map(Item => {
            return(
                <porfolioitem title={Item.title} slug={Item.slug} />
            );
        });
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