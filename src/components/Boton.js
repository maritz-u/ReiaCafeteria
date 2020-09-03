import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = (props) => {
    return (
        <div className="Botonbox">
            <Link to={props.title} id = {props.id}>{props.title}</Link>
        </div>
    )
};

export default ButtonLink