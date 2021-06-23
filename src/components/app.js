import React, { Component } from 'react';
import {
  BrowserRouter as Router,Switch, Route} from "react-router-dom"
import NavigationContainer from './navigation/Navigation-Container';
import home from "./Pages/home"
import Failure from"./Pages/error"
import about from "./Pages/about"
import Contact from "./Pages/Contact"
import add from "./Pages/Addblog"
import Blogs from "./Pages/Blogs"
import PortfolioDetail from"./Portfolio/portfolio-detail";
import Auth from"./Pages/auth";
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
     loggedInState:"Not_in"
    }
    this.handlelogin=this.handlelogin.bind(this);
    this.handlefaillogin=this.handlefaillogin.bind(this);
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
  render() {
    return (
      <div className='Contain'>
      <NavigationContainer />
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
         <Route path="/secret" component={add}/>
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
