import React from 'react';
import { Link } from 'gatsby';

// Styles
import './FeaturedProject.styles.scss';

const FeaturedProject = ({ title, description, slug, image }) => (
    <div 
        className="featured-project" 
        style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
    >
        <div className="featured-project-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={`work/${slug}`} className="cta hollow">View Project</Link>
        </div>
    </div>
)

export default FeaturedProject;