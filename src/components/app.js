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
export default class App extends Component {
  getportfolioitems(){
    axios.get('https://whoami.devcamp.space/portfolio/portfolio_items')
  .then(function (response) {
    console.log(response);
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
