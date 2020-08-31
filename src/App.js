import React from 'react';
import './App.css';
import LogoReia from './images/LogoReia.png';
import Firstpage from './components/first-page.js';
import Secondpage from './components/second-page.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">  
        <img src={LogoReia} className="logo" alt="logo" />
      </header>
      <Firstpage></Firstpage>
      <Secondpage></Secondpage>
    </div>
  );
}




export default App;
