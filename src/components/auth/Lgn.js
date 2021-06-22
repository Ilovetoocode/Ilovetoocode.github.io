import React, {Component} from "react";
export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
        }
    }
    render(){
    return (
        <div>
            <h1>Please log in to use the dashboard</h1>
            <form>
                <input type="text"/>
                <input type="password"/>
            </form>
        </div>
    )
    }
}