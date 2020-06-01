import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextHeader from '../components/TextHeader/TextHeader.component';
import ContactForm from '../components/ContactForm/ContactForm.component';

import './packages.styles.scss';

const ContactPage = () => (
  <Layout>
    <SEO title="Our Services" />
        <div className="contact-page">
            <TextHeader
                pageTitle={'Contact the studio'}
                introText={'We look forward to talking to you about your upcoming project. Please complete the form below and we will respond within two business days.'}
            />
            <ContactForm />
        </div>
  </Layout>
)

export default ContactPage
