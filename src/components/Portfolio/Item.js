import React from 'react';
import {Link} from 'react-router-dom';
export default function(props) {

    const{id, description, thumb_image_url, logo}=props.items;
    return(
         <div className="portfolio-item-wrap">
             <div className="portfolio-background"
             style={{
                 backgroundImage:"url("+ thumb_image_url+")"
             }}
             />
           <img src={logo}/>
           <div>
            {description}</div>
           <Link to={`/portfolio/${id}`}>Link</Link>
           </div>
    );
}