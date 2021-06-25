import React, {Component} from "react";
import axios from "axios";
import Portside from "../Portfolio/port-side";
import Portform from"../Portfolio/form";
export default class Portfoliomanage extends Component{
    constructor(){
        super();
        this.state={
            portitem:[],
            editportfolio:{}
        };
        this.handleformnewsubmit=this.handleformnewsubmit.bind(this);
        this.handleeditsubmit=this.handleeditsubmit.bind(this);
        this.handleformerror=this.handleformerror.bind(this);
        this.Deletebutton=this.Deletebutton.bind(this);
        this.handleedit=this.handleedit.bind(this);
        this.clearedit=this.clearedit.bind(this);
    }
    clearedit(){
        this.setState({
            editportfolio:{}
        })
    }
    handleedit(items){
        this.setState({
            editportfolio: items
        })
    }
    Deletebutton(items){
        axios.delete(`https://api.devcamp.space/portfolio/portfolio_items/${items.id}`, {withCredentials:true}).then(response =>{
this.setState({
    portitem: this.state.portitem.filter(Item =>{
        return Item.id !== items.id;
    })
})
return response.data;
}).catch(error=>{
    console.log("Deletion error", error)
        })
    }
    handleeditsubmit(){
        this.getitems();
    }
    handleformnewsubmit(items){
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
                        handleformnewsubmit={this.handleformnewsubmit}
                        handleeditsubmit={this.handleeditsubmit}
                        handleformerror={this.handleformerror}
                        clearedit={this.clearedit}
                        editportfolio={this.state.editportfolio}
                        />
                        </div>
                        <div className="right-side">
                        <Portside
                        Deletebutton={this.Deletebutton} 
                        data={this.state.portitem}
                        handleedit={this.handleedit}
                        />
                        </div>
                    </div>
                )
                }
    }
    