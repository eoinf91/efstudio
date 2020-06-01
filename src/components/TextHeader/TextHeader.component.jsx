import React from 'react';

// Styles
import './TextHeader.styles.scss';

const TextHeader = ({ pageTitle, introText }) => {
    return(
        <div className='text-header'>
            <h2>{pageTitle}</h2>
            <p>{introText}</p>
        </div>
    )
}

export default TextHeader;