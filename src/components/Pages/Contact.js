import React from 'react';
import mail from'../../../static/assets/images/contact/mail.jpg'
export default function(){
    return(
        <div 
        className="contentpage"
        >
        <div className="top-row"
        style={{
            background:"url("+mail+") no-repeat",
            backgroundSize:"100%",
            backgroundPosition:"center",
        }}
        />
        <div className="bottom-row">
Nice rows here
        </div>
        </div>
    )
}