import React, {Component} from "react";
import ReactModal from "react-modal";
ReactModal.setAppElement(".app-wrapper");
import Blogform from "../Blogs/blogform";
export default class Modblog extends Component{
    constructor(props){
        super(props);
        this.customstyle={
            content:{
                top:"50%",
                left:"50%",
                right:"auto",
                marginRight:"-50%",
                transform:"translate(-50%,-50%)",
                width:"800px",
            },
            overlay:{
                backgroundColor:"rgba(1,1,1,0.75)"
            }
        }
        this.formsubmitsuccess=this.formsubmitsuccess.bind(this)
    }
    formsubmitsuccess(blog){
        this.props.newbloghandle(blog);
    }
    render(){
    return (
        <ReactModal style={this.customstyle} onRequestClose={()=>{
            this.props.closemodal();
        }} isOpen={this.props.modalopen}>
            <Blogform formsubmitsuccess={this.formsubmitsuccess}/>
        </ReactModal>
    )
    }
}