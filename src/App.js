import React from 'react';
import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';

import Home from './components/Viewhome.js';
import Secondpage from './components/second-page.js';
import Cocina from './components/cocina.js';
import Pedidos from './components/pedidos.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Router path= "/Home" component= {Home}/> 
       <Router path= "/Mesero" component= {Secondpage}/> 
       <Router path= "/Pedidos" component= {Pedidos}/> 
       <Router path= "/Cocina" component= {Cocina}/> 
      </BrowserRouter> 
  
    
      
    </div>
  );
}




export default App;
