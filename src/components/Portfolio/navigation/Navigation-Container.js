import React, {Component} from 'react';
import React, {Navlink} from 'react-router-dom'
export default class NavigationComponent extends Component{
    constructor(){
        super();
    }
    render(){
    return(
    <div>
        <Navlink exact to="/"> Home</Navlink>
        <Navlink  to="/About-me">About</Navlink>
        <Navlink to="/contact">Contact</Navlink>
        <Navlink to="/blog">Blogs</Navlink>
        <button>Blog</button>
        {true ? <Navlink to="/secret">Add page</Navlink>: <button>Nothing button </button>}
    </div>
    );
    }
}