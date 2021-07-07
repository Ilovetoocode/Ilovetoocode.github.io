import React, {Component} from "react";
import axios from "axios";
import RTE from "../forms/rte";
export default class Blogform extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            blog_status:"",
            content:"",
        }
        this.Changer=this.Changer.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);
        this.rtechange=this.rtechange.bind(this);
    }
    rtechange(content){
     this.setState({content})
    }
    buildForm(){
        let formData = new FormData();
        formData.append("portfolio_blog[title]", this.state.title);
        formData.append("portfolio_blog[content]", this.state.content);
        return formData;
    }
    handlesubmit(event){
        axios.post("https://whoami.devcamp.space/portfolio/portfolio_blogs", this.buildForm(), {withCredentials:true}).then(response => 
        this.props.formsubmitsuccess(response.data.portfolio_blog),
        this.setState({
            title:"",
            blog_status:"",
        })
        ).catch(error=>{
            console.log("err", error)
        })
        event.preventDefault();
    }
    Changer(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
    return (
        <form onSubmit={this.handlesubmit} className="blogform">
            <div className="two-collumn">
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
            </div>
            <div className="one-collumn">
                <RTE rtechange={this.rtechange}/>
            </div>
            <button className="btn" type="submit">Submit</button>
        </form>
    )
    }
}