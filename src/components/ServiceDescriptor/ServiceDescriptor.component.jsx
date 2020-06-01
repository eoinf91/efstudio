import React from 'react';
import { Link } from 'gatsby';

// Styles
import './ServiceDescriptor.styles.scss';

const ServiceDescriptor = ({ 
    title, 
    descriptionA, 
    descriptionB, 
    includesItemA, 
    includesItemB, 
    includesItemC, 
    includesItemD,
    deliverableA,
    deliverableB,
    deliverableC,
    deliverableD,
    deliverableE,
    deliverableF,
    addOnA,
    addOnB,
    addOnC,
    addOnD
}) => {
    return(
        <div className='service-descriptor'>
            <div className='col col-one'>
                <div className='description col-item'>
                    <h2>{title}</h2>
                    <p>{descriptionA}</p>
                    {descriptionB
                        ? <p>{descriptionB}</p>
                        : null
                    }
                </div>
                <div className='includes col-item'>
                    <h3>Includes</h3>
                    <ul>
                        <li>{includesItemA}</li>
                        <li>{includesItemB}</li>
                        <li>{includesItemC}</li>
                        {includesItemD
                            ? <li>{includesItemD}</li>
                            : null
                        }
                    </ul>
                </div>
            </div>

            <div className='col col-two'>
                <div className='deliverables col-item'>
                    <h3>Deliverables</h3>
                    <ul>
                        <li>{deliverableA}</li>
                        <li>{deliverableB}</li>
                        <li>{deliverableC}</li>
                        <li>{deliverableD}</li>
                        <li>{deliverableE}</li>
                        {deliverableF
                            ? <li>{deliverableF}</li>
                            : null
                        }
                    </ul>
                </div>
                <div className='timeline col-item'>
                    <h3>Timeline</h3>
                    <p>We aim to deliver your new brand in 4 weeks.</p>
                    <p>Take a look at a detailed timeline here.</p>
                </div>
                <div className='add-ons col-item'>
                    <h3>Add-Ons Available:</h3>
                    <ul>
                        <li>{addOnA}</li>
                        <li>{addOnB}</li>
                        <li>{addOnC}</li>
                        {addOnD
                            ? <li>{addOnD}</li>
                            : null
                        }
                    </ul>
                </div>
            </div>

            <Link to='/contact' className='cta'>Contact The Studio</Link>
        </div>
    )
}

export default ServiceDescriptor;