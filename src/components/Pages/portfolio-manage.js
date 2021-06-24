import React, {Component} from "react";
import axios from "axios";
import Portside from "../Portfolio/port-side";
import Portform from"../Portfolio/form";
export default class Portfoliomanage extends Component{
    constructor(){
        super();
        this.state={
            portitem:[]
        };
        this.handleformsubmit=this.handleformsubmit.bind(this);
        this.handleformerror=this.handleformerror.bind(this);
    }
    handleformsubmit(items){
    this.setState({
        portitem: [items].concat(this.state.portitem)
    })
    }
    handleformerror(error){
        console.log("Submission error", error)
    }
    getitems(){
    axios.get("https://whoami.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {withCredentials:true}).then(response => {
        console.log("response data", response);
        this.setState({
            portitem: [...response.data.portfolio_items]
        })
        })
        .catch(error => {
        console.log(error);
        })
        }
        componentDidMount(){
            this.getitems();}
            render(){
                return (
                    <div className="port-manage-wrapper">
                    <div className="left-side">
                        <Portform
                        handleformsubmit={this.handleformsubmit}
                        handleformerror={this.handleformerror}/>
                        </div>
                        <div className="right-side">
                        <Portside data={this.state.portitem}/>
                        </div>
                    </div>
                )
                }
    }
    