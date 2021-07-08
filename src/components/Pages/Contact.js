import React from 'react';
import mail from'../../../static/assets/images/contact/mail.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <h1><FontAwesomeIcon icon="comment"/> Discord: @Mr.Meow#9999</h1>
        <h1><a href="https://twitter.com/loldisizawsum" className="twitter-link">
            <FontAwesomeIcon icon= "hashtag"/>
            </a>My Twitter</h1>
            <h1><FontAwesomeIcon className="mailing"icon="paper-plane"/>
            Email: Connorjwalton2@gmail.com
            </h1>
            <h1><FontAwesomeIcon icon="blender-phone"/> Phone number:contact me through other means for more details</h1>
        </div>
        </div>
    )
}