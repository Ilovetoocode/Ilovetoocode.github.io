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
        <NavLink exact to="/"> Home</NavLink>
        <NavLink  to="/About-me">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blogs</NavLink>
        {true ? <NavLink to="/secret"> Add page</NavLink> : <button>Nothing button </button>}
        </div>
        <div className="Right-side">
            Connor Walton
        </div>
    </div>
    );
    }
}