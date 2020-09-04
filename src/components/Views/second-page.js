import React from 'react'; 
import Logo from '../Elements/Logo.js';
import ButtonLink from '../Elements/Boton.js';
import Input from '../Elements/Input.js';


const Secondpage= () => {
    return (
      <div className="Botonbox">
        <Logo />
        <br/>
        <Input
        id = "Input"
        description = "Ingresa tú codigo"/>
        <br/>
        <ButtonLink
        title = " Entrar " 
        id="Btn Entrar"/>
        <br/>
      </div>
    );
  } 
  
  export default Secondpage; 