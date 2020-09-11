import React from 'react';
import Logo from '../Elements/Logo.js';
import ButtonLink from '../Elements/Boton.js'

const Home = () => {
  return (
    <div className="BigContainer">
      <div className="container">
        <Logo />
        <div className="contenedorBotonesHome">
          <ButtonLink
            title="Cocina"
            id="Btn Cocina"
            pageto="Cocina" />
          <br />
          <ButtonLink
            title="Mesero"
            id="Btn Mesero"
            pageto="Mesero" />
        </div>
      </div>
    </div>
  );
}

export default Home; 