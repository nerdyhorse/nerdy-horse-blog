import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import React from "react"
import ProjectPostItem from "../components/project-post-item-layout"

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.pageContext.posts

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={project.frontmatter.title}
          description={
            project.frontmatter.description || project.frontmatter.excerpt
          }
        />

        <article style={{ padding: `0px 15px 15px 15px` }}>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {project.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {project.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: project.html }}/>
        </article>
        <ProjectPostItem posts={posts}/>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
