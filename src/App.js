import React, { Component } from 'react';
import './App.css';
import Search from './utils/Search';
import NavBar from './Components/Navbar';

class App extends Component {
  state={
    search:'',
    schools:[]
  }
  render() {
    return (
      <div>
        <NavBar/>
        <Search/>
      </div>
    )
  }
}




export default App;
