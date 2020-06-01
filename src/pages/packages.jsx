import React from "react"
import { Link, graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextHeader from '../components/TextHeader/TextHeader.component';
import PackageItem from '../components/PackageItem/PackageItem.component';

import './packages.styles.scss';

const PackagesPage = ({ data }) => (
  <Layout>
    <SEO title="Our Services" />
        <div className='package-descriptor'>
            <TextHeader 
                pageTitle={'Our Packages'}
                introText={'Take a look at our standard package options.'}
            />
            <div className='directory-menu'>
                {
                    data.packagesQuery.edges.map(({node}) => (
                        <PackageItem
                            items={node.html}
                        />
                    ))
                }
                <div className='package-descriptor-container'>
                    <div className='package-descriptor'>
                        <div className='col col-one'>
                            <div className='col-item description'>
                                <h4>Discovery</h4>
                                <p><strong><em>Don’t see the right package for you?</em></strong> We offer custom packages tailored to your needs. Get in touch below to arrange a consultation for your website.</p>
                            </div>
                        </div>
                    </div>
                    <Link to={'/contact'} className='cta hollow'>Contact Us Now</Link>
                </div>
            </div>
        </div>
  </Layout>
)

export default PackagesPage

export const query = graphql`
    query {
        packagesQuery: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/packages-page/"}}) {
            edges{
                node{
                    html
                }
            }
        }
    }
`
