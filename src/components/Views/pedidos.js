import Logo from '../Elements/Logo.js';
import ButtonLink from '../Elements/Boton.js';
import Input from '../Elements/Input.js';
import React, { useEffect, useState } from "react";



const Pedidos = () => {

  /* Función para traer archivo JSON*/
  function ListaProductos() {
    const [menu, setMenu] = useState({ "Té": [] })
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

  /* Función para crear arrays de archivo JSON */
  const menu = ListaProductos();
  const arraymenu = Array.from(menu);

  const cafes = arraymenu.filter(function (arraymenu) {
    return arraymenu.tipo === "Cafés";
  });
  // console.log(cafes);

  const te = arraymenu.filter(function (arraymenu) {
    return arraymenu.tipo === "Té";
  });
  // console.log(te);

  const pasteleria = arraymenu.filter(function (arraymenu) {
    return arraymenu.tipo === "Pastelería";
  });
  // console.log(pasteleria);

  const sandwich = arraymenu.filter(function (arraymenu) {
    return arraymenu.tipo === "Sandwich";
  });
  // console.log(sandwich);

  /* Constante para que cuando aprieten un link del navbar aparezca información */
  /* Estado de selecciones vacios, setOpciones es la función que va a pushear a opciones */
  const [opciones, setOpciones] = useState([]);

  return (
    <div className="Orders">
      <Logo />
      <div className="navbar">
        <nav>
          <a href="#/cafes" id="cafe" value="cafes" onClick={() => setOpciones(cafes)}> Cafés </a>
          <a href="#/pasteleria" id="pasteleria" value="pasteleria" onClick={() => setOpciones(pasteleria)}> Pasteleria </a>
          <a href="#/te" id="te" value="te" onClick={() => setOpciones(te)}> Té </a>
          <a href="#/sandwich" id="sandwich" value="sandwich" onClick={() => setOpciones(sandwich)}> Sandwich </a>
        </nav>
      </div>
      <div className="BoxContainer">
        <div className="menuBox">
          {opciones.map((data, index) => {
            return <div key={index}>
              <button type="submit" className="btnoption">{data.nombre}</button>
              <p>{data.valor}</p>
            </div>
          })}
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

export default Pedidos; 