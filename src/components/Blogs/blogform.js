import React, {Component} from "react";
export default class Blogform extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            blog_status:"",
        }
        this.Changer=this.Changer.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);
    }
    handlesubmit(event){
        this.props.formsubmitsuccess(this.state)
        event.preventDefault();
    }
    Changer(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
    return (
        <form onSubmit={this.handlesubmit}>
            <input
            onChange={this.Changer} 
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            />
            <input
            onChange={this.Changer} 
            type="text"
            name="blog_status"
            placeholder="status"
            value={this.state.blog_status}
            />
            <button type="submit">Submit</button>
        </form>
    )
    }
}