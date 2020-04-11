import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeItemLayout from "../components/home-item-layout"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const markdowns = data.allMarkdownRemark.edges

  const posts = markdowns.filter(
    edge => edge.node.frontmatter.template === "post"
  )

  const projects = markdowns.filter(
    edge => edge.node.frontmatter.template === "project"
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <HomeItemLayout title={`Projects`} items={projects} />
      <HomeItemLayout title={`Posts`} items={posts} />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            template
            title
            tags
            description
            slug
            category
          }
        }
      }
    }
  }
`
