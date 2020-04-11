import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeItemLayout from "../components/home-item-layout"

const Posts = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const markdowns = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Posts" />
      <HomeItemLayout title={`Posts`} items={markdowns} />
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 1000, filter: {frontmatter: {template: {eq: "post"}}}) {
      edges {
        node {
          frontmatter {
            title
            slug
            template
            project
            category
            date(formatString: "MMMM DD YYYY")
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Posts
