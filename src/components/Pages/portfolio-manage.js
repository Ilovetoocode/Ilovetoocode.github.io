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
    }
    getitems(){
    axios.get("https://whoami.devcamp.space/portfolio/portfolio_items", {withCredentials:true}).then(response => {
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
                        <Portform/>
                        </div>
                        <div className="right-side">
                        <Portside data={this.state.portitem}/>
                        </div>
                    </div>
                )
                }
    }
    