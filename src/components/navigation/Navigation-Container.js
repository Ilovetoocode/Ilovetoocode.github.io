import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {withRouter} from "react-router";
const NavigationComponent = props => {
    const dynamLink = (route, linkText) =>{
        return(
        <div className="nav-link-wrapper">
        <NavLink to="/secret" activeClassName="nav-link-active">Add page</NavLink>
        </div>
        )
    }
    const hndllgt = ()=>{
        axios.delete("https://api.devcamp.space/logout", {withCredentials:true}).then(response => {
            if(response.status === 200){
                props.history.push("/");
                props.handlelogout();
            }
            return response.data;
        }).catch(error=>{
            console.log("Issue", error)
        })
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
            {props.loggedInState === 'in' ? <a onClick={hndllgt}>Log out</a> : null}
        </div>
    </div>
    );
    }
    export default withRouter (NavigationComponent);