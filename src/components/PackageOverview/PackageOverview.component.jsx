import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';


// Components
import PackageOverviewItem from '../PackageOverviewItem/PackageOverviewItem.component';

// Styles
import './PackageOverview.styles.scss';

// Style

const PackageOverview = () => {
    return(
        <StaticQuery
            query={graphql`
                query packages {
                    packagesQuery: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/packages-summary/"}}) {
                        edges {
                            node {
                                frontmatter {
                                    title
                                }
                                html
                            }
                        }
                    }
                }
            `}
        
            render={data => (
                <div className='package-overview'>
                    {
                        data.packagesQuery.edges.map(({ node }) =>(
                            <PackageOverviewItem
                                title={node.frontmatter.title}
                                suitableFor={node.frontmatter.suitableFor}
                                copy={node.html}
                            />
                        ))
                    }
                    <div className='package-overview-container'>
                        <div className='package-overview'>
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
            )}
        />
    )
};

export default PackageOverview;