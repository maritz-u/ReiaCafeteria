import React, { useState } from 'react';
import db from '../../firebase.js';

const cocinaOrder = [];

const ContainerCocina = () => {

    const [cocina, setCocina] = useState([]);
    const getOrder = () => {
        db.collection('pedido').onSnapshot((querySnapshot) => {
            querySnapshot.forEach(doc => {
                // let idPedido= doc
                // // console.log(idPedido);
                let mesa = doc.data().mesa[2];
                // console.log(mesa);
                let productos = doc.data().name;
                // console.log(productos);
                cocinaOrder.push({ "mesa": mesa, "productos": productos});
                setCocina(cocinaOrder);
                // console.log(cocina);
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
                {cocina.map(({ mesa, productos, index }) => {
                    // console.log(mesa,productos,index);
                    return <div key={index}>
                        <h4>{mesa}</h4>
                        {productos.map((data, i) => {
                            return <div key={i}>
                                <p>{data}</p>
                            </div>
                        })}
                    </div>
                })};

                    <button className="botonEntrega">Entregar</button>
            </div>
        </div>

    )
}

export default ContainerCocina;