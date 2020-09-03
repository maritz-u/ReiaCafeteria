import React from 'react';
import './App.css';
// import { BrowserRouter, Router } from 'react-router-dom';
// import { Router, Route, BrowserHistory } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Viewhome.js';
import Mesero from './components/Mesero.js';
import Cocina from './components/cocina.js';
import Pedidos from './components/pedidos.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Mesero" component={Mesero} />
          <Route  exact path="/Pedidos" component={Pedidos} />
          <Route exact path="/Cocina" component={Cocina} />
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
