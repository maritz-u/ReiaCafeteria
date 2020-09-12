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
/* Constante global para cliente y mesa de pedido */
const initialTotal = [];

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
  /* Para tener monto total del pedido */
  const [total, setTotal] = useState();
  
  /* Para manejar click de cada opción */
  const handleClick = (nombre, valor) => {
    initialOrder.push({ "name": nombre, "value": valor });
    setOrder(initialOrder);
    console.log(order);
    initialTotal.push({'value': valor ++});
    setTotal(initialTotal);
    console.log(initialTotal);
  };

  /* Constante que se va a crear para manejar la mesa y el nombre del cliente */
  const [table, setTable] = useState([]);
  /* Para obtener información de los input */
  const inputMesa = (e) => {
    // console.log(e.target.value);
    const numberMesa = e.target.value;
    // console.log(numberMesa);
    // const {id, value} = e.target
    // console.log(id,value);
    initialTable.push(numberMesa);
    setTable(initialTable);
    console.log(table);
  };

  /* Para agregar colección a firebase */
  const addOrder = () => {
    console.log('estoy escuchando');
    let mesa = [];
    let nombre = [];
    let precio = [];
    initialOrder.map((data) => {
      nombre.push(data.name);
      precio.push(data.value);
    });
    initialTable.map((data)=>{
      mesa.push(data);
    });

    db.collection('pedido').add({
      mesa : mesa,
      name: nombre,
      precio: precio,
    })
      .then((docRef) => {
        console.log('nuevo pedido agregado' + docRef.id);
        // console.log(docRef);
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
          <table>
            <tbody>
              {opciones.map((data, index) => {
                return <tr key={index} onClick={() => handleClick(data.nombre, data.valor)}>
                  <td>{data.nombre}</td>
                  <td>${data.valor}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
        <div className="pedidoBox">
          {order.map((data, index) => {
            return <div key={index}>
              <p>{data.name}</p>
              <p>{data.value}</p>
            </div>
          })}

          {/* <div className="lineaInformacionPedido">
            <button className="aumentarPedido">+</button><div className="numeroPedido"></div><button className="disminuirPedido">-</button>
          </div> */}
          <p className="total">Total $ {initialTotal.map((data) =>{
            return data.value ++
          })}
          </p>
        </div>
      </div>

      <div className="BoxContainer">
        <div className="ColumnContainer">
          <div className="inputContainer">
            <Input
              id="Mesa"
              description="Número Mesa"
              onChange={inputMesa} />
          </div>
        </div>
        <div className="ColumnContainer">
          <div className="Botonbox">
            <Link to="Cocina" className="Link" id="order" title="Ordenar" onClick={() => addOrder()}>Ordenar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pedidos; 