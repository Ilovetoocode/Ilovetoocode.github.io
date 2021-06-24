import React, { Component } from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,Switch, Route} from "react-router-dom"
import NavigationContainer from './navigation/Navigation-Container';
import home from "./Pages/home"
import Failure from"./Pages/error"
import about from "./Pages/about"
import Contact from "./Pages/Contact"
import add from "./Pages/Addblog"
import portedit from "./Pages/portfolio-manage";
import Blogs from "./Pages/Blogs"
import PortfolioDetail from"./Portfolio/portfolio-detail";
import Auth from"./Pages/auth";
import No from"./Pages/Dead_pages/Nope";
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
     loggedInState:"Not_in"
    }
    this.handlelogin=this.handlelogin.bind(this);
    this.handlefaillogin=this.handlefaillogin.bind(this);
    this.handlelogout=this.handlelogout.bind(this);
  }
  handlelogin(){
    this.setState({
      loggedInState:"in"
    })
  }
  handlefaillogin(){
    this.setState({
      loggedInState:"Not_in"
    })
  }
  handlelogout(){
    this.setState({
      loggedInState:"Not_in"
    })
  }
  Chkn(){
    return axios.get("https://api.devcamp.space/logged_in",{withCredentials: true}).then(response =>{
      const loggedIn =response.data.logged_in;
      const loggedInState = this.state.loggedInState;
      if (loggedIn && loggedInState === "in"){
        return loggedIn;
      }else if (loggedIn && loggedInState === "Not_in"){
        this.setState({
          loggedInState:"in"
        })
      }
      else if (!loggedIn && loggedInState === "in"){
        this.setState({
          loggedInState:"Not_in"
        })
      }
    })
    .catch(error =>{
      console.log("An error occoured",error)
    })
  }
  componentDidMount(){
    this.Chkn();
  }
  Pgaccs(){
    return [
      <Route key="blog-manager" path="/secret" component={add}/>,
      <Route key="portfolio-manager"path="/portfolio-edit" component={portedit}/>
    ]
  }
  render() {
    return (
      <div className='Contain'>
      <NavigationContainer loggedInState={this.state.loggedInState}
      handlelogout={this.handlelogout}/>
      <Router>
        <div>
       <Switch>
         <Route exact path="/" component={home}/>
         <Route path="/About-me" component={about}/>
         <Route path="/contact" component={Contact}/>
         <Route path="/auth" 
         render={props => (
         <Auth
         {...props} 
         handlelogin={this.handlelogin}
         handlefaillogin={this.handlefaillogin}/>)}
         />
         {this.state.loggedInState ==="in" ? this.Pgaccs() : null}
         <Route path="/troll" component={No}/>
         <Route path="/blog" component={Blogs}/>
         <Route exact path="/portfolio/:slug" component={PortfolioDetail}/>
         <Route component={Failure}/>
       </Switch>
        </div>
      </Router>
      </div>
    );
  }
}
