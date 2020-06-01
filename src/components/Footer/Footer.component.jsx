import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

// Styles
import './Footer.styles.scss';

// Components
import SideHeading from '../SideHeading/SideHeading.component';
import Review from '../Review/Review.component';

// Assets
import studioLogoWhite from '../../assets/EF_Studio_Logo_White.svg';
import Kerry from '../../images/client_logos/kerry_logo.svg';
import GA from '../../images/client_logos/ag_logo.svg';
import NP from '../../images/client_logos/np_logo.png';
import Tonisity from '../../images/client_logos/tonisity_logo.svg';

const Footer = () => (
    <footer>
        <div className="contact">
            <h2>Ready to take your business online?</h2>
            <Link to="/contact" className="cta dark">Contact us To Get Started</Link>
        </div>
        {/* <div className="reviews">
            <SideHeading title={'Reviews'} />
            <div className="review-container">
                <Review />
                <Review />
                <Review />
            </div>
        </div> */}
        <div className="clients">
            <h3>We have proudly worked with some amazing brands:</h3>
            <div className="client-logo-container">
                <div className="client-logo">
                    <OutboundLink href='https://kerry.com' target='_blank' rel='noreferrer noopener'>
                        <img src={Kerry} alt='Kerry' />
                    </OutboundLink>
                </div>
                <div className="client-logo">
                    <OutboundLink href='https://giorgisjourney.com' target='_blank' rel='noreferrer noopener'>
                        <img src={GA} alt='Giorgis Journey' />
                    </OutboundLink>
                </div>
                <div className="client-logo">
                    <OutboundLink href='https://nphope.com' target='_blank' rel='noreferrer noopener'>
                        <img src={NP} alt='Neuropraxis' />
                    </OutboundLink>
                </div>
                <div className="client-logo">
                    <OutboundLink href='https://tonisity.com' target='_blank' rel='noreferrer noopener'>
                        <img src={Tonisity} alt='Tonisity' />
                    </OutboundLink>
                </div>
            </div>
        </div>
        <div className="sign-off">
            <img src={studioLogoWhite} alt="Eoin Feely Studio" />
            <p>&copy; {new Date().getFullYear()}, EF Studio</p>
            <p>
                <Link to="/privacy">Privacy Policy</Link>
            </p>
        </div>
    </footer>
)

export default Footer;