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
        <button>Blog</button>
        {true ? <button>Add blog</button> : <button>Nothing button </button>}
    </div>
    );
    }
}