import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Blogitem from "../Blogs/blgitm";
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
         const blogrecord=this.state.blogitems.map(blogitem=>
            { 
          return <Blogitem key={blogitem.id} blogitem={blogitem}/>;
            });
            return <div>{blogrecord}</div>
    }
}
export default Blogs;