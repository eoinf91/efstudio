import React from 'react';
import { Link } from 'gatsby';

// styles
import './PackageOverviewItem.styles.scss';

const PackageOverviewItem = ({ copy }) => (
    <div className='package-overview-container'>
        <div className='package-overview' dangerouslySetInnerHTML={{ __html: copy }} />
        <Link to={'/packages'} className='cta hollow'>Find Out More</Link>
    </div>
)

export default PackageOverviewItem;