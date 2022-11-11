import React from 'react';

const Button = (props) => {
    
    return(
        <div id={props.id} className='button' onClick={props.onClick}>
            <p>{props.value === '*' ? 'x' : props.value}</p>
        </div>
    )
}

export default Button;