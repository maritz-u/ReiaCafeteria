import React from 'react'; 
import { Link } from 'react-router-dom';

const Firstpage= () => {
    return (
      <div className="Botonbox">
         
          <Link to="/Cocina" id="boton cocina">Cocina</Link>
          <Link to="/Mesero" id="boton mesero">Mesero</Link>
  
      </div>
    );
  } 
  
  export default Firstpage; 