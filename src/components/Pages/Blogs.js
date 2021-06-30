import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
class Blogs extends Component {
         constructor(){
             super();
             this.state={
                 blogitems:[]
             }
            this.getblog=this.getblog.bind(this);
         }
         getblog(){
             axios.get("https://whoami.devcamp.space/portfolio/portfolio_blogs", {withCredentials:true
            }).then(response => {
             this.setState({
                 blogitems: response.data.portfolio_blogs
             })
            }).catch(error=> {
                console.log("Error!", error)
            }) 
         }
         componentDidMount(){
             this.getblog();
         }
     render(){
    return(
        <div>
        <h2>Reading stuff</h2>
        <div>
        <Link to="About-me">Read more on me and my life</Link>
        </div>
        </div>
    )}
}
export default Blogs;