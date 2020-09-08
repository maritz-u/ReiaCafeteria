import React from 'react';
import Logo from '../Elements/Logo.js';
import ButtonLink from '../Elements/Boton.js';
import Input from '../Elements/Input.js';
import react, { useEffect, useState } from "react"; 



export default function ListaProductos () { 

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
};

const menu = useListaProductos();
const arraymenu = Array.from(menu);
// const Arraymenu= menu();

const cafes = arraymenu.filter(function(arraymenu){
  return arraymenu.tipo ==="Cafés";
}); 
 console.log(cafes);

const te = arraymenu.filter(function(arraymenu){
  return arraymenu.tipo ==="Té";
}); 
console.log(te);

const pasteleria = arraymenu.filter(function(arraymenu){
  return arraymenu.tipo ==="Pastelería";
}); 
console.log(pasteleria);

const sandwich = arraymenu.filter(function(arraymenu){
  return arraymenu.tipo ==="Sandwich";
}); 
console.log(sandwich);
    
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
         <div className="BoxContainer">
           <div className="menuBox">
             {sandwich.map((item) => (
               <li key={item.ListaProductos}>
                 <button>{item.nombre}</button>
                 {item.valor}
               </li>
             ))}
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
