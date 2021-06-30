import React from "react";

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
        <h1>{title}</h1>
        <div>
            {content}
        </div>
    </div>
)
}


export default Blogitem;
