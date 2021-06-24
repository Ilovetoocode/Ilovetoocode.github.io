import React, {Component} from "react";
import axios from "axios";
import DropzoneComponent from"react-dropzone-component"
import "../../../node_modules/react-dropzone-component/styles/filepicker.css"
import "../../../node_modules/dropzone/dist/min/dropzone.min.css"
export default class Portform extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            description:"",
            category:"Accomplishment",
            position:"",
            url:"",
            thumb_image:"",
            banner_image:"",
            logo:"",
        }
        this.Changer=this.Changer.bind(this);
        this.Submit=this.Submit.bind(this);
        this.componentConfig=this.componentConfig.bind(this);
        this.djsConfig=this.djsConfig.bind(this)
        this.hndlthmbdrp=this.hndlthmbdrp.bind(this)
        this.handlelogodrop=this.handlelogodrop.bind(this)
        this.handlebannerdrop=this.handlebannerdrop.bind(this)
        this.thumbref = React.createRef();
        this.logoref = React.createRef();
        this.bannerref = React.createRef();
    }
    Submit(event){
        axios.post("https://whoami.devcamp.space/portfolio/portfolio_items",this.buildForm(),{withCredentials:true}).then(response => {
            this.props.handleformsubmit(response.data.portfolio_item);
            this.setState({
                name:"",
                description:"",
                category:"Accomplishment",
                position:"",
                url:"",
                thumb_image:"",
                banner_image:"",
                logo:"",
            });
            [this.thumbref, this.bannerref, this.logoref].forEach(ref =>{
                ref.current.dropzone.removeAllFiles();
            })
        }).catch(error =>{
            console.log("An error occoured", error)
        })
        event.preventDefault();
    }
    hndlthmbdrp(){
        return{
            addedfile: file => this.setState({thumb_image:file})
        };
    }
    handlelogodrop(){
        return{
            addedfile: file => this.setState({logo:file})
        }
    }
    handlebannerdrop(){
        return{
            addedfile: file => this.setState({banner_image:file})
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
    buildForm(){
        let formData = new FormData();
        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);
        formData.append("portfolio_item[category]", this.state.category);
        formData.append("portfolio_item[position]", this.state.position);
        if(this.state.thumb_image){
            formData.append("portfolio_item[thumb_image]", this.state.thumb_image);
        }
        if(this.state.banner_image){
            formData.append("portfolio_item[banner_image]", this.state.banner_image);
        }
        if(this.state.logo){
            formData.append("portfolio_item[logo]", this.state.logo);
        }
        return formData;
    }
    Changer(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render(){
    return (
            <form onSubmit={this.Submit} className="portfoliomanaging">
                <div className="two-collumn">
                <input 
                    type="text"
                    name="name"
                    placeholder="Title"
                    value={this.state.name}
                    onChange={this.Changer}/>
                      <input 
                    type="text"
                    name="url"
                    placeholder="Link"
                    value={this.state.url}
                    onChange={this.Changer}/>
                </div>
                <div className="two-collumn">
                    <select 
                    name="category"
                    value={this.state.category}
                    onChange={this.Changer}
                    className="select-element">
                    <option value="Accomplishment">Accomplishment</option>
                    <option value="Real life">IRL</option>
                    <option value="Web Stuff">Web Stuff</option>
                    </select>
                    <input 
                    type="text"
                    name="position"
                    placeholder="pos"
                    value={this.state.position}
                    onChange={this.Changer}/>
                </div>
                <div className="one-collumn">
                <textarea 
                    type="text"
                    name="description"
                    placeholder="describe"
                    value={this.state.description}
                    onChange={this.Changer}/>
                </div>
                <div className="img-Upload three-collumn">
                <DropzoneComponent 
                ref={this.thumbref}
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.hndlthmbdrp()}
                />
               < DropzoneComponent 
               ref={this.bannerref}
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.handlebannerdrop()}
                />
                < DropzoneComponent 
                ref={this.logoref}
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.handlelogodrop()}
                />
                </div>
                <div>
                    <button type="submit">
                        Save
                        </button>
                    </div>
            </form>
    )
    }
}