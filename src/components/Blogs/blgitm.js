import React from "react";
import {Link} from "react-router-dom"
const Blogitem = props =>{
const{
id, 
blog_status,
content, 
title,
featured_image_url,
}=props.blogitem;
return(
    <div>
        <Link to={`/b/${id}`}>
        <h1>{title}</h1>
        </Link>
        <div>
            {content}
        </div>
    </div>
)
}


export default Blogitem;
