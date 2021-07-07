import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser"
import Blogimg from"../Blogs/image"
export default class blogdetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentid  : this.props.match.params.slug,
            blogitem : {},
        }
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
      } =this.state.blogitem
    return (
      <div className="Blog-page">
        <div className="content">
          <Blogimg img={featured_image_url}/>
        <h1>{title}</h1>
        <div className="content1">
            {ReactHtmlParser(content)}
        </div>
        </div>
      </div>
    );
  }
}