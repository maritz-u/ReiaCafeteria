import React from 'react'; 
import Logo from './Logo.js'


const Secondpage= () => {
    return (
      <div className="Botonbox">
        <Logo />
         <input type="text" id="codigomesero" placeholder="Ingresa tu código"></input>
        <button type="submit" id="boton cocina">Entrar</button>
      </div>
    );
  } 
  
  export default Secondpage; 