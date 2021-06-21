import React from 'react';
import {Link} from 'react-router-dom';
export default function(props) {

    const{id, description, thumb_image_url, logo_url}=props.items;
    return(
         <div className="portfolio-item-wrap">
             <div className="portfolio-background"
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