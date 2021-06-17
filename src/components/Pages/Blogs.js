import React from 'react';

import {Link} from "react-router-dom";
export default function(){
    return(
        <div>
        <h2>Reading stuff</h2>
        <div>
        <Link to="About-me">Read more on me and my life</Link>
        </div>
        </div>
    )
}