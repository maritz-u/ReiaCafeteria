import React from 'react';
import Logo from '../Elements/Logo.js';

const Cocina = () => {
    return (
        <div>
            <Logo />
            <div className="contenedorCocina">
                <div className="half">
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
                </div>
            </div>
        </div>
    )
}

export default Cocina;