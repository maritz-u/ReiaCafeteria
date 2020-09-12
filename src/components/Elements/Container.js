import React, { useEffect, useState } from 'react';
import db from '../../firebase.js';

const cocinaOrder = [];

const ContainerCocina = () => {

    const [cocina, setCocina] = useState([]);
    const getOrderTable = () => {
        db.collection('pedido').onSnapshot((querySnapshot) => {
            querySnapshot.forEach(doc => {
                // console.log(doc.data());
                // console.log(doc.id);
                let id = doc.id;
                let mesa = doc.data().mesa[2];
                let productos = doc.data().name;
                // console.log(id, mesa, productos);
                cocinaOrder.push({id,mesa,productos});
                // let mesa = doc.data().mesa[2];
                // // console.log(mesa);
                // let productos = doc.data().name;
                // // console.log(productos);
                // cocinaOrder.push({ "mesa": mesa, "productos": productos});
                // setCocina(cocinaOrder);
                // console.log(cocina);
            });
            
            setCocina(cocinaOrder);
            // console.log(cocina);
        });
    };
    // getOrder();
    useEffect(()=>{
        getOrderTable();
    }, []);
    
    // const pedidoCocina = cocina;
    // const arrayPedidoCocina= Array.from(pedidoCocina);

    // const mesa= arrayPedidoCocina.filter(function (arrayPedidoCocina) {
    //         return arrayPedidoCocina.mesa === "mesa";
    // });
    // console.log(mesa);

    return (
        <div className="kitchen box">
            <div className="half">
                {cocinaOrder.map(({ mesa, productos, id }) => {
                    // console.log(mesa,productos,id);
                    return <div key={id}>
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