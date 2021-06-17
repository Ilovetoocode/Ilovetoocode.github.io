import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Portfoliocontainer from './Portfolio/Portfolio-contain';
import NavigationContainer from "./navigation/Navigation-Container";
import home from './Pages/home';
import about from './Pages/about';
import Contact from './Pages/Contact'
import add from "./Pages/Addblog"
import Blogs from './Pages/Blogs';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
      <h1>The geek crowd</h1>
        <div>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
      <Router>
        <div>
        <NavigationContainer/>
       <Switch>
         <Route exact path="/" component={home} />
         <Route path="/About-me" component={about} />
         <Route path="/contact" component={Contact}/>
         <Route path="/secret" component={add}/>
         <Route path="/blog" component={Blogs}/>
       </Switch>
        </div>
      </Router>
      </div>
    );
  }
}
