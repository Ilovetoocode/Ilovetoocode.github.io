import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Porfolioitem extends Component {
constructor(props) {
    super(props);
    this.state={
        PorfolioitemClass:""
    };
    }
    handleMouseEnt(){
this.setState({PorfolioitemClass:'img-blur'})
    }
    handleMouseExt(){
        this.setState({PorfolioitemClass:''});
        
    }
    render() {
    const{id, description, thumb_image_url, logo_url}=this.props.items;
    return(
         <div className="portfolio-item-wrap"
         onMouseEnter={()=> this.handleMouseEnt()}
        onMouseLeave={()=> this.handleMouseExt()}
        >
             <div className={"portfolio-background " + this.state.PorfolioitemClass}
             style={{
                 backgroundImage:"url("+ thumb_image_url+")"
             }}
             />
             <div  className="img-text-wrap">
                 <div className="Logo-wrap">
                     <img src={logo_url}/>
                 </div>
                 <div className="subtitle">{description}</div>
             </div>
             </div>
    );
            }
}