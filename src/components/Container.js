import React from 'react';

const ContainerCocina = () => {
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