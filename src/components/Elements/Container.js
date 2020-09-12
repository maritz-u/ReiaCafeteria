import React, { useState } from 'react';
import db from '../../firebase.js';

const cocinaOrder = [];

const ContainerCocina = () => {

    const [cocina, setCocina] = useState([]);
    const getOrder = () => {
         db.collection('pedido').onSnapshot((querySnapshot) =>{
            querySnapshot.forEach(doc => {
                let mesa = doc.data().mesa[2];
                // console.log(mesa);
                let productos = doc.data().name;
                // console.log(productos);
                cocinaOrder.push({ "mesa": mesa, "productos": productos });
                setCocina(cocinaOrder);
                console.log(cocina);
            });     
        });
    };
    getOrder();

    // const pedidoCocina = cocina;
    // const arrayPedidoCocina= Array.from(pedidoCocina);

    // const mesa= arrayPedidoCocina.filter(function (arrayPedidoCocina) {
    //         return arrayPedidoCocina.mesa === "mesa";
    // });
    // console.log(mesa);


   
    return (
        <div className="kitchen box">
            <div className="half">
                {cocina.map(({mesa,productos})=>{
                    return <div key={mesa}>
                        <p>{mesa}</p>
                        <p>{productos}</p>
                    </div>
                })}
                {/* {mesa.map((data,index)=>
                console.log(data,index) )} */}
                {/* {[cocina].map((data) =>{
                    console.log(data);
                    // console.log("Estos son los productos" + productos);
                    // console.log(index);
                    // console.log(data);
                    
                    // {[data].map((mesa) =>{
                    //     console.log(mesa)
                    // })}
                    // return <div key={index}>
                    //     <p>
                    //         {data.mesa}
                    //     </p>
                    // <p>
                    //     {data.productos}
                    // </p>

                    // </div>
                })}; */}
                    <button className="botonEntrega">Entregar</button>
                </div>
        </div>

    )
}

export default ContainerCocina;