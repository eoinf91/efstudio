import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextHeader from '../components/TextHeader/TextHeader.component'
import ServiceDescriptor from '../components/ServiceDescriptor/ServiceDescriptor.component'

const ServicesPage = () => (
  <Layout>
    <SEO title="Our Services" />
        <div className="services-page">
            <TextHeader 
                pageTitle={'Our Services'}
                introText={'The service descriptions below focus on the base package of each service. Get in touch with our studio with your query and we will create a custom package based on your needs.'}
            />
            <ServiceDescriptor
                title={'Branding Design'}
                descriptionA={'At our studio we take branding seriously. We know branding will make your business memorable and we provide solutions that can grow as your business grows. We focus on delivering a brand that will be long lasting and delivered to what you are looking for.'}
                descriptionB={'Each branding design comes with a full brand guidelines PDF, colour palette, main logo plus alternate logos.'}
                includesItemA={'Discovery call'}
                includesItemB={'Brand Questionnaire'}
                includesItemC={'Brand Strategy & Analysis'}
                includesItemD={'Design'}
                deliverableA={'Mood Board Design'}
                deliverableB={'Primary Call'}
                deliverableC={'Secondary Logo'}
                deliverableD={'Typography Selection'}
                deliverableE={'Custom Colour Palette'}
                deliverableF={'Brand Guidelines PDF'}
                addOnA={'Brand Strategy & Marketing Analysis'}
                addOnB={'Print Design (business card, catalog, flyers)'}
                addOnC={'Digital Design (Instagram, Facebook)'}
            />
            <ServiceDescriptor
                title={'Web Design'}
                descriptionA={'Having an online “shop front” for your business is highly recommended to help grow your business and gain recognition to your target audience. We promise to understand your user before we design your website in order to deliver the right design for your business and attract the attention of the user.'}
                descriptionB={'Each web design package will be designed for whatever platform you prefer and include interactive mockups.'}
                includesItemA={'Discovery call'}
                includesItemB={'User Experience Research & Solutions'}
                includesItemC={'Responsive Design'}
                includesItemD={'Interactive Desktop Mockups'}
                deliverableA={'Mood Board Design'}
                deliverableB={'Primary Call'}
                deliverableC={'Homepage Mockups'}
                deliverableD={'Two Extra Page Mockups'}
                deliverableE={'Custom CSS For Your Brand'}
                addOnA={'Web Development'}
                addOnB={'Additional Page Design'}
                addOnC={'Digital Marketing Strategy'}
            />
            <ServiceDescriptor
                title={'Web Development'}
                descriptionA={'Our studio has experienced web developers that can take any design and turn it into a fully functioning website for your business. We concentrate on building fast functional websites to the latest standards in web development to your preferred platform.'}
                includesItemA={'Design Handover (if not designed in-house)'}
                includesItemB={'Live Website to your chosen hosting platform'}
                includesItemC={'Testing & Performance improvements'}
                deliverableA={'Fully Functioning Website'}
                deliverableB={'Go Live'}
                deliverableC={'Responsive Website Build'}
                deliverableD={'Homepage Build'}
                deliverableE={'Two Extra Pages'}
                addOnA={'Web Design'}
                addOnB={'Additional Page Build'}
                addOnC={'Digital Marketing Strategy'}
                addOnD={'Monthly Website Maintenance Plan'}
            />
        </div>
  </Layout>
)

export default ServicesPage
