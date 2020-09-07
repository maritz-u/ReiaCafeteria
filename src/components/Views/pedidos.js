import React from 'react';
import Logo from '../Elements/Logo.js';
import ButtonLink from '../Elements/Boton.js';
import Input from '../Elements/Input.js';
import data from '../../menu.json';

const Pedidos = () => {
    const menu = data;
    console.log(menu);
    console.log(menu.Cafés[0]);
    console.log(menu.Pastelería);
    
    return (
        <div className="Orders">
            <Logo />
            <div className="navbar">
                <nav>
                    <a href="#/cafes"> Cafés </a>
                    <a href="#/pasteleria"> Pasteleria </a>
                    <a href="#/te"> Té </a>
                    <a href="#/sandwich"> Sandwich </a>
                </nav>
            </div>
            <div className="menuBox">
                <button> Capuchino </button> <p>$1.500</p>
                <button> Chocolate Caliente</button> <p>$1.500</p>
            </div>
            <div className="pedidoBox">
                <p>Capuchino </p>
                <button>+</button>
                <button>-</button>
            </div>
            <div className="total pedido">
                <p>Total</p> <p>$1.500</p>
            </div>
            <div className="inputContainer">
                <Input />
                <Input />
            </div>
            <div className="BtnContainer">
                <ButtonLink
                    id="order"
                    title="Ordenar"
                    pageto="Cocina"
                />
            </div>
        </div>

    )
}

export default Pedidos;