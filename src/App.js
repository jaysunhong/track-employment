import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Process from "./components/process/Process";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Process />
      </React.Fragment>
    );
  }
}

export default App;
