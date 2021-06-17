import React, {Component} from 'react';

export default class NavigationComponent extends Component{
    constructor(){
        super();
    }
    render(){
    return(
    <div>
        <button>Home</button>
        <button>Contact</button>
        <button>About</button>
        <button>Blog</button>
        {true ? <button>Add blog</button> : <button>Nothing button </button>}
    </div>
    );
    }
}