import React, {Component} from "react";
import authimage from "../../../static/assets/images/auth/Coder.jpg";
import Login from "../auth/Lgn";
export default class Auth extends Component{
    constructor(props){
        super(props);
        this.handleauth = this.handleauth.bind(this);
        this.handleauthfail = this.handleauthfail.bind(this);
    }
    handleauth(){
        this.props.handlelogin();
        this.props.history.push("/");
    }
    handleauthfail(){
        this.props.handlefaillogin();

    }
    render(){
    return (
     <div className="auth-wrapper">
     <div className="left-collumn" 
     style={{
         backgroundImage: `url(${authimage})`}}/>

     <div className="right-collumn">
         <Login
         handleauth={this.handleauth}
         handleauthfail={this.handleauthfail}/>
     </div>
        </div>
    )
    }
}