import React from 'react'; 
import Logo from './Logo.js';
import Button from './Boton.js'

const Home = () => {
    return (
      <div className="container">
         <Logo />
         <br/>
          < Button 
          title = "Cocina"
          id ="Btn Cocina" />  
          <br/>
          < Button
          title = "Mesero"
          id ="Btn Mesero" /> 
      </div>
    );
  } 
  
  export default Home; 