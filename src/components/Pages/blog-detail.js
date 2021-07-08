import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser"
import Blogimg from"../Blogs/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Blogform from "../Blogs/blogform";
export default class blogdetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentid  : this.props.match.params.slug,
            blogitem : {},
            editmode:false,
        }
        this.editclick=this.editclick.bind(this)
        this.imgdel=this.imgdel.bind(this)
    }
    imgdel(){
      this.setState({
        blogitem:{
          featured_image_url:""
        }
      })
    }
    editclick(){
      console.log("editing is, not finished :("),
      this.setState({editmode:true})
    }
    getpage(){
        axios.get(`https://whoami.devcamp.space/portfolio/portfolio_blogs/${this.state
        .currentid}`).then(response => {

        this.setState({
            blogitem:response.data.portfolio_blog
        })
        }).catch(error =>
            {
                console.log("err", error)
            })
    }
    componentDidMount(){
        this.getpage();
    }
  render() {
      const{
      title,
      content,
      featured_image_url,
      blog_status
      } =this.state.blogitem;
      const contentmanage=()=>{
        if(this.state.editmode){
          return<Blogform imgdel={this.imgdel} editmode={this.state.editmode} editblog={this.state.blogitem}/>
        }
        else{
          return(<div className="content">
          <div className="change-content">
            <a onClick={this.editclick}>
          <FontAwesomeIcon icon="marker"/>
          </a>
          </div>
            <Blogimg img={featured_image_url}/>
          <h1>{title}</h1>
          <div className="content1">
              {ReactHtmlParser(content)}
          </div>
          </div>)
        }
      }
    return (
      <div className="Blog-page"> {contentmanage()} </div>
    );
  }
}