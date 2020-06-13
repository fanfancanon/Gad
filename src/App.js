import React, { Component } from 'react'
import Login from './pages/login'
import Home from './pages/home'
import { Switch, Route } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
        <div>
          <Switch>
              <Route path='/home' component = {Home}></Route>
              <Route path='/' component = {Login}></Route>
          </Switch>
   
          
        </div>
    )
  }
}
