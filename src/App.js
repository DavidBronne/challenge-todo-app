import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route } from "react-router-dom";
import Todos from "./pages/Todos";

class App extends Component {
  render() {
    return (
      <div >
        <Route exact path="/todos" component={Todos} />
      </div>
    );
  }
}

export default App;
