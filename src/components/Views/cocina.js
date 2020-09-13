import React, { useEffect, useState } from 'react';
import db from '../../firebase.js';
import Logo from '../Elements/Logo.js';


const cocinaOrder = [];

const Cocina = () => {
    
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
            });
            
            setCocina(cocinaOrder);
            console.log(cocina);
        });
    };
    // getOrder();
    useEffect(()=>{
        getOrderTable();
    }, []);

    const handleSubmit= (e) =>{
        console.log('estoy escuchando');
        return alert('Pedido Entregado!'); 
    }


    return (
        <div>
            <Logo />
            <div className="contenedorCocina">
                    {cocina.map(({ mesa, productos, id }) => {
                    // console.log(mesa,productos,id);
                    return <div className="half" key={id}>
                        <h4>Mesa: {mesa}</h4>
                        {productos.map((data, i) => {
                            return <div key={i}>
                                <p>{data}</p>
                            </div>
                        })}
                        <br/>
                        <button className="botonEntrega" onClick= {handleSubmit} value="Entregar" >Entregar</button>
                    </div>
                })};
            </div>
        </div>
    )
}

export default Cocina;