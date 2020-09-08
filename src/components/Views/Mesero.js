import React from 'react'; 
import Logo from '../Elements/Logo.js';
import ButtonLink from '../Elements/Boton.js';
import Input from '../Elements/Input.js';


const Mesero = () => {
  return (
      <div className="BigContainer">
        <div className="authReia">
          <Logo />
          <br />
          <Input
            id="Input"
            description="Ingresa tú codigo" />
          <br />
          <ButtonLink
            title="Entrar"
            id="Btn Entrar"
            pageto="Pedidos"/>
          <br />
        </div>
      </div>
    );
  }   
  
  export default Mesero; 


