import React, { Component } from 'react';
import './utils/ecoAPI';
import Navbar from './Components/Navbar';

class App extends Component {
  state={
    search:'',
    schools:[]
  }
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    )
  }
}




export default App;
