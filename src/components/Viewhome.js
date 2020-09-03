import React from 'react'; 
import Logo from './Logo.js';
import ButtonLink from './Boton.js'

const Home = () => {
    return (
      <div className="container">
         <Logo />
         <br/>
          < ButtonLink 
          title = "Cocina"
          id ="Btn Cocina" />  
          <br/>
          < ButtonLink
          title = "Mesero"
          id ="Btn Mesero" /> 
      </div>
    );
  } 
  
  export default Home; 