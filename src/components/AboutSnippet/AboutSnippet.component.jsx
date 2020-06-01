import React from 'react';
import { Link } from 'gatsby';

// Styles
import './AboutSnippet.styles.scss';

const AboutSnippet = () => (
    <div className="about-snippet">
        <div className="image"></div>
        <div className="content">
            <h4>What is EF Studio?</h4>
            <p>EF Studio is a digital based agency, based in Mullingar, Co.Westmeath, Ireland, specialising in creating custom online solutions for your business needs.The studio director, Eoin Feely, has experience in creating solutions for both print and digital design along with developing custom websites for many businesses across Ireland and worldwide. As a freelance based studio, we have taken on many clients while travelling the world, displaying the committment and dedication to each of our clients while achieving our own personal goals. Want to find out more?</p>
            <Link to="/contact" className="cta">Get in touch</Link>
        </div>
    </div>
)

export default AboutSnippet;