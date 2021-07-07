import React from "react";
const Blogimg = props => {
    if(!props.img){
        return null;
    }
    return(
        <div className="img-feat">
        <img src={props.img}/>
        </div>
    )
}
export default Blogimg