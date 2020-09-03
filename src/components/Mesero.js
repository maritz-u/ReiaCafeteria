import React from 'react'; 
import Logo from './Logo.js';
import ButtonLink from './Boton.js';
import Input from './Input.js';


const Mesero = () => {
    return (
      <div className="authReia">
        <Logo />
        <br/>
        <Input
        id = "Input"
        description = "Ingresa tú codigo"/>
        <br/>
        <ButtonLink
        title = "Entrar" 
        id="Btn Entrar"
        pageto="Pedidos"/>
        <br/>
      </div>
    );
  } 
  
  export default Mesero; 