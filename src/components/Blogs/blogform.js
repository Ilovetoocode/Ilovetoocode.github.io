import React, {Component} from "react";
import axios from "axios";
import RTE from "../forms/rte";
import { DropzoneComponent } from "react-dropzone-component";
import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";
export default class Blogform extends Component{
    constructor(props){
        super(props);

        this.state={
            id:"",
            title:"",
            blog_status:"",
            content:"",
            featured_img:"",
        }
        this.Changer=this.Changer.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);
        this.rtechange=this.rtechange.bind(this);
        this.componentConfig=this.componentConfig.bind(this);
        this.djsConfig=this.djsConfig.bind(this);
        this.featimgdrop=this.featimgdrop.bind(this);
        this.featimg = React.createRef();
    }
    componentDidMount(){
        if(this.props.editmode){
            this.setState({
                id: this.props.editblog.id,
                title: this.props.editblog.title,
                status: this.props.editblog.status,
            })
        }
    }
    componentConfig(){
        return{
            iconFiletypes:[".jpg",".png"],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post"
        }
    }
    djsConfig(){
        return{
            addRemoveLinks: true,
            maxFiles: 1
        }
    }
    featimgdrop(){
        return{
            addedfile: file => this.setState({"featured_img":file})
        }
    }
    rtechange(content){
     this.setState({content})
    }
    buildForm(){
        let formData = new FormData();
        formData.append("portfolio_blog[title]", this.state.title);
        formData.append("portfolio_blog[blog_status]", this.state.blog_status);
        formData.append("portfolio_blog[content]", this.state.content);
        if(this.state.featured_img){
            formData.append("portfolio_blog[featured_image]", this.state.featured_img);
        }
        return formData;
    }
    handlesubmit(event){
        axios.post("https://whoami.devcamp.space/portfolio/portfolio_blogs", this.buildForm(), {withCredentials:true})
        .then(response => {
        if (this.state.featured_img){
            this.featimg.current.dropzone.removeAllFiles();
            }
        this.setState({
            title:"",
            blog_status:"",
            content:"",
            featured_img:""
        }),
        this.props.formsubmitsuccess(response.data.portfolio_blog)}).catch(error=>{
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
                <RTE rtechange={this.rtechange}
                editmode={this.props.editmode}
                contentToEdit={this.props.editmode && this.props.editblog.content ?
                    this.props.editblog.content : null
                }
                />
            </div>
            <div className="img-Upload">
            <DropzoneComponent 
            ref={this.featimg}
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.featimgdrop()}
                >
                    <div className="dz-message">
                        Blog image
                    </div>
                </DropzoneComponent>
                </div>
            <button className="btn" type="submit">Submit</button>
        </form>
    )
    }
}