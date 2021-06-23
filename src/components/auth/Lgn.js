import React, {Component} from "react";
import axios from 'axios';
export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            errr:""
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event){
        axios.post("https://api.devcamp.space/sessions", 
        {
            client:{
                email: this.state.email,
                password: this.state.password
            }
        },
        {withCredentials:true}
        ).then(response => {
            if (response.data.status === 'created') {
                 this.props.handleauth();
            } else{this.setState({errr: "Please type in the right credentials"});
            this.props.handleauthfail();
        }
        }).catch(error =>{
            this.setState({
                errr:"An error happened, please try again"
            });
            console.log("This is the exact error, if you are the admin, please confirm if this is because you buggered up my code again somehow, or the api end just broke.",error)
            this.props.handleauthfail();
        })
        event.preventDefault();
    }
    render(){
    return (
        <div>
            <h1>Please log in to use the dashboard</h1>
            <div>
                {this.state.errr}
            </div>
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
                <div>
                <button type="submit">
                Login
                </button>
                </div>
            </form>
        </div>
    )
    }
}