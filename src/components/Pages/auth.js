import React, {Component} from "react";
import authimage from "../../../static/assets/images/auth/Coder.jpg";
import Login from "../auth/Lgn";
export default class Auth extends Component{
    render(){
    return (
     <div className="auth-wrapper">
     <div className="left-collumn" 
     style={{
         backgroundImage: `url(${authimage})`}}/>

     <div className="right-collumn">
         <Login/>
     </div>
        </div>
    )
    }
}