import React from 'react';
import {NavLink} from 'react-router-dom';
const NavigationComponent = props => {
    const dynamLink = (route, linkText) =>{
        return(
        <div className="nav-link-wrapper">
        <NavLink to="/secret" activeClassName="nav-link-active">Add page</NavLink>
        </div>
        )
    }
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
        {props.loggedInState === "in" ? (dynamLink("/secret", "Add")) : null}
        </div>
        <div className="Right-side">
            Connor Walton
        </div>
    </div>
    );
    }
    export default NavigationComponent;