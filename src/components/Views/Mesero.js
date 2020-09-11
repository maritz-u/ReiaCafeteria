import React from 'react'; 
import Logo from '../Elements/Logo.js';
import ButtonLink from '../Elements/Boton.js';
import Input from '../Elements/Input.js';


const Mesero = () => {
  
  /*Constante que tiene código de mesero */
  const codMesero = "005";
  /* Constante que señala que pageTo esta vacio */
  const pageTo= [];

  /* Para obtener información del Input */
  const inputMesero = e => {
    // console.log(e.target.value);
    const infoMesero= e.target.value;
    console.log(infoMesero); 
  }

  const authMesero = ()=>{
    if(inputMesero === codMesero){
      pageTo.push("Pedidos")
    }else{
      alert('Código incorrecto');
    }
    console.log(pageTo);
  }
  return (
      <div className="BigContainer">
        <div className="authReia">
          <Logo />
          <div className="contenedorPaginaMesero">
            <Input
              id="Input"
              description="Ingresa tú codigo"
              onChange={inputMesero} />
            <ButtonLink
              title="Entrar"
              id="Btn Entrar"
              pageto= "Pedidos"
              onClick={() => authMesero()}
              />
          </div>
        </div>
      </div>
    );
  }   
  
  export default Mesero; 



