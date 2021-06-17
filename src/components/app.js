import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Portfoliocontainer from './Portfolio/Portfolio-contain';
import NavigationContainer from './navigation/Navigation-Container';
import home from './Pages/home';
import about from './Pages/about';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
      <Router>
        <div>
        <NavigationContainer />
       <Switch>
         <Route exact path="/" component={home} />
         <Route path="/About-me" component={about} />
       </Switch>
        </div>
      </Router>
        <h1>The geek crowd</h1>
        <div>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <Portfoliocontainer />
      </div>
    );
  }
}
