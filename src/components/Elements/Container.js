import React, {useState} from 'react';
import db from '../../firebase.js';

const ContainerCocina = () => {

    const [cocina, setCocina] = useState([]);

    const getOrder = db.collection("pedido").onSnapshot((querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id:doc.id});
        });
        console.log(docs);
        docs.map((data) => {
            cocina.push(data.name);
        });
        setCocina(cocina);
        console.log(cocina);
    });
    return (
        <div className="kitchen box">
            <h3>
                "001 Orlando Bloom"
            </h3>
            <div className="checkbox">
                <input type="checkbox" name="" id="" /> Café
                <input type="checkbox" name="" id=""/> Pie de Limón 
            </div>
            <div className="progress">
                <button type="submit">Entregar</button>
            </div>
        </div>

    )
}

export default ContainerCocina;