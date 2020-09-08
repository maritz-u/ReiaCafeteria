import React from 'react';
import Logo from '../Elements/Logo.js';
import ButtonLink from '../Elements/Boton.js';
import Input from '../Elements/Input.js';
import react, { useEffect, useState } from "react"; 

function useListaProductos() {
    
    const [menu , setMenu] = useState ({"Té":[]})

    useEffect(() => {
        fetch("Json/menu.json")
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            setMenu(data)
        })
    }, [])

    return menu
}

export default function ListaProductos () { 
    const menu = useListaProductos()

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

         {menu["Té"].map((item) => (
           <li key={item.ListaProductos}>
             <button>{item.nombre}</button>
                     {item.valor}
           </li>
         ))}

         <div className="BoxContainer">
           <div className="menuBox">
             <button> Capuchino </button> <p>$1.500</p>
             <button> Chocolate Caliente</button> <p>$1.500</p>
           </div>

           <div className="pedidoBox">
             <p>Capuchino </p>
             <button>+</button>
             <button>-</button>
           </div>
         </div>

         <div className="BoxContainer">
             <div className="ColumnContainer">
           <div className="Total">
             <p>Total</p> <p>$1.500</p>
           </div>
           <div className="inputContainer">
             <Input />
             <Input />
           </div>
           </div>
           <div className="BtnContainer">
             <ButtonLink id="order" title="Ordenar" pageto="Cocina" />
           </div>
         </div>
       </div>
     );
  }
