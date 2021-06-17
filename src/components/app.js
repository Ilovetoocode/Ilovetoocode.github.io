import React, { Component } from 'react';
import moment from "moment";
import Portfoliocontainer from './Portfolio/Portfolio-contain';
import NavigationContainer from './navigation/Navigation-Container';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
      <NavigationContainer />
        <h1>The geek crowd</h1>
        <div>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <Portfoliocontainer />
      </div>
    );
  }
}
