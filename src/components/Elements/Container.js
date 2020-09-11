import React, { useState } from 'react';
import db from '../../firebase.js';

const ContainerCocina = () => {

    const getOrder = () => {
         db.collection('pedido').onSnapshot((querySnapshot) =>{
            querySnapshot.forEach(doc => {
                console.log(doc.data());
            });     
        });
    };
    getOrder();
    // const [cocina, setCocina] = useState([]);
    // const getOrder = db.collection("pedido").onSnapshot((querySnapshot) => {
    //     let docs = [];
    //     querySnapshot.forEach((doc) => {
    //         docs.push({ ...doc.data(), id: doc.id });
    //     });
    //     console.log(docs);
    //     // docs.map((data) => {
    //     //     cocina.push(data.name);
    //     // });
    //     // setCocina(cocina);
    //     // console.log(cocina);
    // });
    
    return (
        <div className="kitchen box">
            <div className="half">
                    <button className="botonEntrega">Entregar</button>
                </div>
        </div>

    )
}

export default ContainerCocina;