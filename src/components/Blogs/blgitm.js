import React from "react";
import {Link} from "react-router-dom"
import Truncate from "react-truncate";
import striptags from "striptags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <Truncate lines={1} ellipsis={<span> ... <Link to={`/b/${id}`}><FontAwesomeIcon icon="book-open"/></Link></span>}>{striptags(content)}</Truncate>
        </div>
    </div>
)
}


export default Blogitem;
