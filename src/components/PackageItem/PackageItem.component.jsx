import React from 'react';
import { Link } from 'gatsby';

// styles
import './PackageItem.styles.scss';

const MenuItem = ({ items }) => (
    <div className='package-descriptor-container'>
        <div className='package-descriptor' dangerouslySetInnerHTML={{ __html: items}} />
        <Link to={'/contact'} className='cta hollow'>Contact Us Now</Link>
    </div>
)

export default MenuItem;