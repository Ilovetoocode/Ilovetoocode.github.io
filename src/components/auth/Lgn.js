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
            <form onSubmit={this.handleSubmit}>
                <input 
                type="email"
                name="email"
                placeholder="youremail@example.com"
                value={this.state.email}
                onChange={this.handleChange}/>
                <input type="password"
                name="password"
                placeholder="your password"
                value={this.state.password}
                onChange={this.handleChange}/>
            </form>
            <div>
                <button type="submit">
                Login
                </button>
            </div>
        </div>
    )
    }
}