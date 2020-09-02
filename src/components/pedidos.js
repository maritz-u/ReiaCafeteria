import React from 'react';
import Logo from './Logo.js';
import Button from './Boton.js';

const Pedidos = () => {
    return (
        <div>
            <Logo/>
            <div className="navbar">
                <nav>
                    <a href="#/cafes"> Cafés </a>
                    <a href="#/pasteleria"> Pasteleria </a>
                    <a href="#/te"> Té </a>
                    <a href="#/sandwich"> Sandwich </a>
                </nav>
            </div>
            <div className="menu Box">
                <button> Capuchino </button> <p>$1.500</p>
                <button> Chocolate Caliente</button> <p>$1.500</p>
            </div>
            <div className ="pedido Box">
                <p>Capuchino </p>
                <button>+</button>
                <button>-</button>
            </div>
            <div className="total pedido">
                <p>Total</p> <p>$1.500</p>
            </div>
            <Button 
                id = "order"
                title = "Ordenar"
             />
        </div>
    )
}

export default Pedidos;