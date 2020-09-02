import React from 'react'; 
import Logo from './Logo.js';
import Button from './Boton.js';
import Input from './Input.js';


const Secondpage= () => {
    return (
      <div className="Botonbox">
        <Logo />
        <br/>
        <Input
        id = "Input"
        description = "Ingresa tú codigo"/>
        <br/>
        <Button
        title = " Entrar "
        id="Btn Entrar"/>
        <br/>
      </div>
    );
  } 
  
  export default Secondpage; 