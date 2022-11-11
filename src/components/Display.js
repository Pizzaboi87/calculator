import React from 'react';

const Display = (props) => {
    return(
        <div className='display'>
            <p className='sum'>{props.sum}</p>
            <p className='input' id='display'>{(props.currentText && (props.current > 9999999999 || props.current < -9999999999)) ? props.currentText : props.current}</p>
        </div>
    )
}

export default Display;