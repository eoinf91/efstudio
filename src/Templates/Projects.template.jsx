import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './Projects.styles.scss';

const ProjectsTemplate = ({ data }) => (
    <Layout>
        <SEO title={`${data.markdownRemark.frontmatter.title} | Work`} />
        <div className="project-page">
            <h4 className="trail">Work - {data.markdownRemark.frontmatter.title}</h4>
            <div className="project">
                {data.markdownRemark.frontmatter.imageC.childImageSharp.fluid
                    ? <Img fluid={data.markdownRemark.frontmatter.imageC.childImageSharp.fluid} />
                    : <div className="project-image"></div>

                }
                <div className="project-text">
                    <h4>{data.markdownRemark.frontmatter.title}</h4>
                    <p className="sub">See the live site: <OutboundLink href={data.markdownRemark.frontmatter.liveUrl} target="_blank" rel="noopener noreferrer">{data.markdownRemark.frontmatter.liveUrl}</OutboundLink></p>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    <div className="services">
                        <h4>Services Provided</h4>
                        <p>{data.markdownRemark.frontmatter.services}</p>
                    </div>
                </div>
                <div className="project-gallery">
                    <div className="one grid-item"><Img fluid={data.markdownRemark.frontmatter.imageA.childImageSharp.fluid} /></div>
                    <div className="two grid-item"><Img fluid={data.markdownRemark.frontmatter.imageB.childImageSharp.fluid} /></div>
                    <div className="three grid-item"><Img fluid={data.markdownRemark.frontmatter.imageC.childImageSharp.fluid} /></div>
                    <div className="four grid-item"><Img fluid={data.markdownRemark.frontmatter.imageD.childImageSharp.fluid} /></div>
                    <div className="five grid-item"><Img fluid={data.markdownRemark.frontmatter.imageE.childImageSharp.fluid} /></div>
                    <div className="six grid-item"><Img fluid={data.markdownRemark.frontmatter.imageF.childImageSharp.fluid} /></div>
                    <div className="seven grid-item"><Img fluid={data.markdownRemark.frontmatter.imageG.childImageSharp.fluid} /></div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ProjectsTemplate

export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                liveUrl
                services
                imageA {
                    childImageSharp {
                        fluid {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                imageB {
                    childImageSharp {
                        fluid {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                imageC {
                    childImageSharp {
                        fluid {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                imageD {
                    childImageSharp {
                        fluid {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                imageE {
                    childImageSharp {
                        fluid {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                imageF {
                    childImageSharp {
                        fluid {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                imageG {
                    childImageSharp {
                        fluid {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`