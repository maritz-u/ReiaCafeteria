import React from 'react';
import './App.css';

import Home from './components/Viewhome.js';
import Secondpage from './components/second-page.js';
import Cocina from './components/cocina.js';
import Pedidos from './components/pedidos.js';


function App() {
  return (
    <div className="App">
      <Home />
      <Secondpage />
      <Pedidos/>
      <Cocina/>
    </div>
  );
}




export default App;
