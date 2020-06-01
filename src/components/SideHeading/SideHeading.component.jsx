import React from 'react';

// Styles
import './SideHeading.styles.scss';

const SideHeading = ({title}) => {
    return(
        <div className="side-heading">
            <h2>{title}</h2>
        </div>
    )
    
}

export default SideHeading;