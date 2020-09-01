import React from 'react'; 
import Logo from './Logo.js';

const Home = () => {
    return (
      <div className="Botonbox">
         <Logo />
          <button type="submit" id="boton cocina">Cocina</button>
          <button type="submit" id="boton mesero">Mesero</button>
  
      </div>
    );
  } 
  
  export default Home; 