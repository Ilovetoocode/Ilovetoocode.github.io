import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
export default class NavigationComponent extends Component{
    constructor(){
        super();
    }
    render(){
    return(
    <div className="Nav-wrapper">
        <div className="Left-side">
         <div className="nav-link-wrapper">
        <NavLink exact to="/" activeClassName="nav-link-active"> Home</NavLink>
        </div>
        <div className="nav-link-wrapper">
        <NavLink  to="/About-me" activeClassName="nav-link-active">About</NavLink>
        </div>
        <div className="nav-link-wrapper">
        <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
        </div>
        <div className="nav-link-wrapper">
        <NavLink to="/blog" activeClassName="nav-link-active">Blogs</NavLink>
        </div>
        </div>
        <div className="Right-side">
            Connor Walton
        </div>
    </div>
    );
    }
}