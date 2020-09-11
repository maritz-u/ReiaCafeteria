import React from 'react'; 
import Logo from '../Elements/Logo.js';
import ButtonLink from '../Elements/Boton.js';
import Input from '../Elements/Input.js';


const Mesero = () => {
  return (
      <div className="BigContainer">
        <div className="authReia">
          <Logo />
          <div className="contenedorPaginaMesero">
            <Input
              id="Input"
              description="Ingresa tú codigo" />
            <ButtonLink
              title="Entrar"
              id="Btn Entrar"
              pageto="Pedidos"/>
          </div>
        </div>
      </div>
    );
  }   
  
  export default Mesero; 



