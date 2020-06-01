import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SideHeading from '../components/SideHeading/SideHeading.component';
import SEO from "../components/seo"
import PackageOverview from '../components/PackageOverview/PackageOverview.component';
import AboutSnippet from '../components/AboutSnippet/AboutSnippet.component';
import ProjectItem from '../components/ProjectItem/ProjectItem.component';

import './Home.styles.scss';

const IndexPage = ({ data }) => {
  
  return (
  <Layout>
    <SEO title="Home" />
    <div className='home-page'>
      <div className="heading-text">
        <h1>We are a premiere web design & development studio, working with businesses to showcase their work by creating unique designs based on their story.</h1>
      </div>
      <div className="three-col-container">
        {/* <h2>Latest Projects</h2> */}
        <SideHeading title={'Latest Projects'} />
        <div className="three-col">
          {
            data.projectsQuery.edges.map(({node}) =>(
              <ProjectItem 
                classLength={'normal'} 
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                slug={node.frontmatter.slug}
                image={node.frontmatter.imageC.childImageSharp.fluid}
              />
            ))
          }
        </div>
      </div>
      <div className="three-col-container">
          <SideHeading title={'Packages'} />
          <div className="three-col">
              <PackageOverview />
          </div>
      </div>
      <div className="about">
          <SideHeading title={'About EF Studio'} />
          <AboutSnippet />
      </div>
    </div>
  </Layout>
)}

export default IndexPage

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
    }
  }
`