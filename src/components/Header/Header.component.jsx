import React from 'react';
import { Link } from 'gatsby';

// Styles
import './Header.styles.scss';

// Assets
import BlackLogo from '../../assets/EF_Studio_Logo_Black.svg';
import InstagramLogo from '../../assets/instagram_logo.svg';
import FBLogo from '../../assets/fb_logo.svg';
import LinkedInLogo from '../../assets/linkedin_logo.svg';

const Header = () => (
    <header>
        <img src={BlackLogo} alt="Eoin Feely Studio" />
        <nav>
            <Link to="/">
                Welcome
            </Link>
            <Link to="/work">
                Work
            </Link>
            <Link to="/services">
                Services
            </Link>
            <Link to="/packages">
                Packages
            </Link>
            {/* <Link to="/about">
                About
            </Link> */}
            <Link to="/contact">
                Contact
            </Link>
        </nav>
        <div className="social-icons">
            <a href="https://www.instagram.com/ef_studio_ie/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramLogo} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/efstudio.ire" target="_blank" rel="noopener noreferrer">
                <img src={FBLogo} alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/eoinbfeely/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInLogo} alt="LinkedIn" />
            </a>
        </div>
    </header>
)

export default Header;