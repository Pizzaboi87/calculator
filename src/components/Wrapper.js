import React from 'react';

const Wrapper = ({children}) => {
    return(
        <div className='wrapper'>
            <p>Weiser</p>
            {children}
        </div>
    )
}

export default Wrapper;