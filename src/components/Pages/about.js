import React from 'react';
import mascot from'../../../static/assets/images/Bio/Mrmeow.jpg'
export default function(){
    return(
        <div 
        className="contentpage"
        >
        <div className="top-row"
        style={{
            background:"url("+mascot+") no-repeat",
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