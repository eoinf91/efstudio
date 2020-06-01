import React from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';

// Styles
import './ProjectItem.styles.scss';


const ProjectItem = ({ classLength, title, description, slug, image }) => (
    <div className="project-item">
        {image
            ? <Img fluid={image} className='project-item-image' />
            : <div className={`project-item-image ${classLength}`} />
        }
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`work/${slug}`} className='cta hollow'>View Project</Link>
    </div>
)

export default ProjectItem;