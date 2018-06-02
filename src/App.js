import React, { Component } from 'react';
import Navbar from './components/Navbar'
import {Switch, Route } from 'react-router-dom';

import Home from './components/Home'
import AddStudent from './components/AddStudent'

import './App.css';

class App extends Component {
  render() {
    return (
      <main className="main">
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/add' component={AddStudent}/>
          <Route path='/edit/:id' component={AddStudent}/>
        </Switch>
      </main>
    );
  }
}

export default App;
