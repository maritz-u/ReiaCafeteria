import React from 'react';
import './App.css';
// import { BrowserRouter, Router } from 'react-router-dom';
// import { Router, Route, BrowserHistory } from 'react-router-dom';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import Home from './components/Viewhome.js';
import Secondpage from './components/second-page.js';
import Cocina from './components/cocina.js';
import Pedidos from './components/pedidos.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Router path="/Home" component={Home} />
          <Router path="/Mesero" component={Secondpage} />
          <Router path="/Pedidos" component={Pedidos} />
          <Router path="/Cocina" component={Cocina} />
        </Switch>
      </BrowserRouter> 
      {/* Prueba con BrowserHistory
      <Router history = {BrowserHistory}>
       <Route path= "/Home" component= {Home}/> 
       <Route path= "/Mesero" component= {Secondpage}/> 
       <Route path= "/Pedidos" component= {Pedidos}/> 
       <Route path= "/Cocina" component= {Cocina}/>
      </Router> */}
  
    
      
    </div>
  );
}

export default App;
