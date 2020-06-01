import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedProject from '../components/FeaturedProject/FeaturedProject.component';

import './work.styles.scss';

const WorkPage = ({ data }) => {
    
    return(
        <Layout>
            <SEO title="Our Work" />
            <div className="work-page">
                <h2>Our Featured Projects</h2>
                <div className="featured-projects">
                    {
                        data.projectsQuery.edges.map(({node}) => (
                            <FeaturedProject
                                title={node.frontmatter.title}
                                description={node.frontmatter.description}
                                slug={node.frontmatter.slug}
                                image={node.frontmatter.imageC.childImageSharp.fluid.src}
                            />
                        ))
                    }
                </div>
                {/* <div className="other-projects">
                    <h4>Take a look at some of our other projects</h4>
                    <ul>
                        <li>
                            <p>Project</p>
                        </li>
                        <li>
                            <p>Project</p>
                        </li>
                        <li>
                            <p>Project</p>
                        </li>
                        <li>
                            <p>Project</p>
                        </li>
                        <li>
                            <p>Project</p>
                        </li>
                        <li>
                            <p>Project</p>
                        </li>
                    </ul>
                </div> */}
            </div>
        </Layout>
    )
}

export default WorkPage

export const query = graphql`
    query {
        projectsQuery: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/work/"}}) {
            edges {
                node {
                    frontmatter {
                        title
                        description
                        slug
                        imageC {
                            absolutePath
                            childImageSharp {
                                fluid {
                                    originalName
                                    ...GatsbyImageSharpFluid
                                    src
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`