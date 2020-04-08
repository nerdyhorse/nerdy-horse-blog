import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import HomeItemLayout from "../components/home-item-layout"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const markdowns = data.allMarkdownRemark.edges

  const posts = markdowns.filter(
    edge => edge.node.frontmatter.template === "post",
  )

  const projects = markdowns.filter(
    edge => edge.node.frontmatter.template === "project",
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts"/>
      <HomeItemLayout title={`Projects`} items={projects}/>
      <HomeItemLayout title={`Posts`} items={posts}/>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
