import React from 'react';
import Logo from '../Elements/Logo.js';
import ContainerCocina from '../Elements/Container.js';

const Cocina = () => {
    return (
        <div>
            <Logo />
            <div className="contenedorCocina">
                 <ContainerCocina />
                 {/* <ContainerCocina />
                 <ContainerCocina />
                 <ContainerCocina /> */}
                {/* <div className="half">
                    <ContainerCocina />
                    <button className="botonEntrega">Entregar</button>
                </div>
                <div className="half">
                    <button className="botonEntrega">Entregar</button>
                </div>
                <div className="half">
                    <button className="botonEntrega">Entregar</button>
                </div>
                <div className="half">
                    <button className="botonEntrega">Entregar</button>
                </div> */}
            </div>
        </div>
    )
}

export default Cocina;