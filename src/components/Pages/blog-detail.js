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
    return (
      <div>
        <h1>Blog detail</h1>
      </div>
    );
  }
}