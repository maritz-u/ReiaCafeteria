import React from 'react';

const Input = (props) => {
    return (
        <div className="compInput">
            <input type="text"  className="input" id= {props.id} placeholder = {props.description} />
        </div>
    )
}

export default Input; 