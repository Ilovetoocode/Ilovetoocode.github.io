import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Blogitem from "../Blogs/blgitm";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Modblog from '../Modals/blog-modal';
class Blogs extends Component {
         constructor(){
             super();
             this.state={
                 blogitems:[],
                 count:0,
                 page:0,
                 loading: true,
                 blogmodalisopen:false,
             }
            this.getblog=this.getblog.bind(this);
            this.infscroll=this.infscroll.bind(this);
            window.addEventListener("scroll", this.infscroll, false);
            this.handleblogclick=this.handleblogclick.bind(this);
            this.handlemodalclose=this.handlemodalclose.bind(this)
            this.newbloghandle=this.newbloghandle.bind(this);
         }
         newbloghandle(blog){
            this.setState({
                blogmodalisopen:false,
                blogitems: [blog].concat(this.state.blogitems)
            })
                }
         handlemodalclose(){
             this.setState({
                 blogmodalisopen:false
             })
         }

         handleblogclick(){
             this.setState({
                 blogmodalisopen:true
             })
         }
         infscroll(){
                 if (this.state.loading || this.state.blogitems.length === this.state.count){
                     return;
                 }
                if(window.innerHeight+Math.floor(window.scrollY) <= document.documentElement.offsetHeight){
                    this.getblog();
                }
             }
         getblog(){
             this.setState({
                 page:this.state.page + 1
             })
             axios.get(`https://whoami.devcamp.space/portfolio/portfolio_blogs?page=${this.state.page}`, {withCredentials:true
            }).then(response => {

             this.setState({
                 blogitems: this.state.blogitems.concat(response.data.portfolio_blogs),
                 count:response.data.meta.total_records,
                 loading:false,
             })
            }).catch(error=> {
                console.log("Error!", error)
            }) 
         }
         componentDidMount(){
             this.getblog();
         }
         componentWillUnmount(){
             window.removeEventListener("scroll",this.infscroll, false);
         }
     render(){
         const blogrecord=this.state.blogitems.map(blogitem=>
            { 
          return <Blogitem key={blogitem.id} blogitem={blogitem}/>;
            });
            return(
                <div className="Blog-selector">
                    <Modblog newbloghandle={this.newbloghandle} 
                    closemodal={this.handlemodalclose}
                    modalopen={this.state.blogmodalisopen}/>
                    <div className="add-blog">
                        <a onClick={this.handleblogclick}>
                            <FontAwesomeIcon icon="pen"/>
                        </a>
                    </div>
                  <div className="content">
                  {blogrecord}
                  </div>
                  {this.state.loading ? (
                  <div className="loading-disc">
                  <FontAwesomeIcon icon="compact-disc" spin/>
                  </div>) : null} 
                  </div>
            )
    }
}
export default Blogs;