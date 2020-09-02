import React from 'react';

const Input = (props) => {
    return (
        <div className="input">
            <input type="text" id= {props.id} placeholder = {props.description} />
        </div>
    )
}

export default Input 