const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // Query for all products in Shopify
    const result = await graphql(`
        query {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/work/"}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            slug
                        }
                    }
                }
            }
        }
    `)
    // Iterate over all products and create a new page using a template
    // The product "handle" is generated automatically by Shopify
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `work/${node.frontmatter.slug}`,
        component: path.resolve("./src/Templates/Projects.template.jsx"),
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  }