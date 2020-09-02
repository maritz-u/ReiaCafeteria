import React from 'react';

const Button = (props) => {
    return (
        <div className="Botonbox">
            <button type="submit" id = {props.id}>{props.title}</button>
        </div>
    )
};

export default Button