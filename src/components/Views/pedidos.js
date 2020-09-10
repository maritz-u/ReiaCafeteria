import Logo from '../Elements/Logo.js';
// import ButtonLink from '../Elements/Boton.js';
import Input from '../Elements/Input.js';
import React, { useEffect, useState } from "react";
import db from '../../firebase.js';
import { Link } from 'react-router-dom';

/* Constante global para creación de pedido */ 
const initialOrder = [];
/* Constante global para cliente y mesa de pedido */
const initialTable = [];

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
  
  /* Constante que se va a crear para manejar el pedido*/
  const [order, setOrder] = useState([]);
  /* Para manejar click de cada opción */
  const handleClick = (e) => {
    console.log(e.target.name);
    // console.log(e.target.value);
    const orderName = e.target.name;
    const orderValue = e.target.value;
    // console.log(orderName);
    // console.log(orderValue);
   initialOrder.push({"name" : orderName, "value" : orderValue});
    setOrder(initialOrder);
    console.log(order);
  };

  /* Constante que se va a crear para manejar la mesa y el nombre del cliente */
    const [table, setTable] = useState([]);
/* Para obtener información de los input */
  const inputMesa = (e) =>{
    // console.log(e.target.value);
    const numberMesa = e.target.value;
    // console.log(clienteMesa);
    initialTable.push({"mesa":numberMesa});
    setTable(initialTable);
    console.log(table);
  }


  /* Para agregar colección a firebase */
  const addOrder = () => {
    console.log('estoy escuchando');
    let nombre = [];
    let precio = [];
    initialOrder.map((data) => {
      nombre.push(data.name);
      precio.push(data.value);
    });
    
    db.collection('pedido').add({
      name: nombre,
      precio: precio,
    })
    .then((docRef) =>{
      console.log('nuevo pedido agregado')
    })
    .catch((error) => {
      console.log(error)
    })
  };



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
              <button className="btnoption" onClick={handleClick} name={data.nombre} value={data.valor}>{data.nombre}</button>
              <p>{data.valor}</p>
            </div>
          })}
        </div>
        <div className="pedidoBox">
          {order.map((data, index) => {
            return <div key={index}>
                <p>{data.name}</p>
              <p>{data.value}</p>
            </div>
          })}

        <button>+</button> <button>-</button>
        </div>
      </div>

      <div className="BoxContainer">
        <div className="ColumnContainer">
          <div className="Total">
            <p>Total</p> <p>$1.500</p>
          </div>
          <div className="inputContainer">
          <Input
            id="Mesa"
            description="Número Mesa"
            onChange={inputMesa} />
            <Input
            id="Cliente"
            description="Nombre Cliente"
            // onChange={handleInput} 
            />
            <input type="number" name="" id=""/>
            
          </div>hnnnnjghb
        </div>
        <div className="Botonbox">
          <Link to="Cocina" className="Link" id="order" title="Ordenar"  onClick={()=>addOrder()}>Ordenar</Link> 
        </div>
      </div>
    </div>
  );
}

export default Pedidos; 