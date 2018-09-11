import React from 'react';

// practicing to use {props.children}
export const FancyWrapper = (props) => {
    const FancyWrapperStyle = {
        padding: '10px',
        marginBottom: '5px'
    }

    return (
        <div style={FancyWrapperStyle} className="gradient">
            {props.children}
        </div>
    )
}

export default FancyWrapper;
