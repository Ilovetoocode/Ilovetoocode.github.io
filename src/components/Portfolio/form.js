import React, {Component} from "react";
import axios from "axios";
import DropzoneComponent from"react-dropzone-component"
import "../../../node_modules/react-dropzone-component/styles/filepicker.css"
import "../../../node_modules/dropzone/dist/min/dropzone.min.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
            thumb_image_url:"none",
            banner_image_url:"none",
            logo_url:"none",
            edits: false,
            api:"https://whoami.devcamp.space/portfolio/portfolio_items",
            apires:"post"
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
        this.delimage=this.delimage.bind(this);
    }
    delimage(imageType){
        axios.delete(`https://api.devcamp.space/portfolio/delete-portfolio-image/${this.state
        .id}?image_type=${imageType}`, {withCredentials:true}).then(response => {
            this.setState({
                [`${imageType}_url`]:""
            })
        }).catch(error =>{
            console.log("An error occoured", error)
        });
    }
    componentDidUpdate(){
        if (Object.keys(this.props.editportfolio).length > 0){
            const {
                id,
                name,
                description,
                category,
                position,
                url,
                thumb_image_url,
                banner_image_url,
                logo_url,
            }=this.props.editportfolio;
            this.props.clearedit();
            this.setState({
                id: id,
                name:name || "",
                description: description || "",
                category:category ||"Accomplishment",
                position:position||"",
                url: url||"",
                edits: true,
               api:`https://whoami.devcamp.space/portfolio/portfolio_items/${id}`,
               apires:"patch",
                thumb_image_url: thumb_image_url || "",
                banner_image_url: banner_image_url || "",
                logo_url: logo_url || "",
            })
        }
    }
    Submit(event){
        axios({
            method:this.state.apires,
             url:this.state.api,
             data:this.buildForm(),
             withCredentials:true
        })
        .then(response => {
            if (this.state.edits){
                this.props.handleeditsubmit()
            }else{
                this.props.handleformnewsubmit(response.data.portfolio_item)
            }
            this.setState({
                name:"",
                description:"",
                category:"Accomplishment",
                position:"",
                url:"",
                thumb_image:"",
                banner_image:"",
                logo:"",
                edits: false,
            api:"https://whoami.devcamp.space/portfolio/portfolio_items",
            apires:"post"
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
                <div className="img-Upload">
                    {this.state.thumb_image_url && this.state.edits ? 
                    <div className="Editing-images">
                    <img src={this.state.thumb_image_url}/>
                    <div className="img-remove">
                    <a onClick={()=> this.delimage("thumb_image")}>
                    <FontAwesomeIcon icon="ban"/></a>
                    </div>
                    </div>
                :
                <DropzoneComponent 
                ref={this.thumbref}
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.hndlthmbdrp()}
                >
                    <div className="dz-message">
                        Thumbnail
                    </div>
                </DropzoneComponent>
    }            
                    {this.state.banner_image_url && this.state.edits ? (
                    <div className="Editing-images">
                    <img src={this.state.banner_image_url}/>
                    <div className="img-remove">
                    <a onClick={()=> this.delimage("banner_image")}>
                    <FontAwesomeIcon icon="ban"/></a>
                    </div>
                    </div>
                    ):(
               < DropzoneComponent 
               ref={this.bannerref}
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.handlebannerdrop()}
                >
                    <div className="dz-message">
                        Banner
                    </div>
                </DropzoneComponent>
                    )}
                    {this.state.logo_url && this.state.edits ? (
                    <div className="Editing-images">
                    <img src={this.state.logo_url}/>
                    <div className="img-remove">
                    <a onClick={()=> this.delimage("logo")}>
                    <FontAwesomeIcon icon="ban"/></a>
                    </div>
                    </div>
                    ):(
                < DropzoneComponent 
                ref={this.logoref}
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.handlelogodrop()}
                > <div className="dz-message">
                Logo
            </div>
            </DropzoneComponent>
                    )}
                </div>
                <div>
                    <button className="btn"type="submit">
                        Save
                        </button>
                    </div>
            </form>
    )
    }
}