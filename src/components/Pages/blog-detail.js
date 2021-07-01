import React, { Component } from "react";
import axios from "axios";
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
      <div>
        <h1>{title}</h1>
        <img src={featured_image_url}/>
        <div>
            {content}
        </div>
      </div>
    );
  }
}