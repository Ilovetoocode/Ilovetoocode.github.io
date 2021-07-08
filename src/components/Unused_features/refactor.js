import React, {Component} from "react";
import axios from "axios";
export default class Delete extends Component{
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
}