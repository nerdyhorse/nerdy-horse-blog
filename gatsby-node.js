const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          limit: 1000
        ) {
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
              excerpt(format: PLAIN, truncate: true)
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.template === "post"
  )
  handlePosts(createPage, posts)

  // Create project pages.
  const projects = result.data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.template === "project"
  )
  handleProjects(createPage, projects, posts)
}

function handleProjects(createPage, projects, posts) {
  const projectTemplate = path.resolve(`./src/templates/project.js`)

  projects.forEach(project => {
    const projectPosts = posts.filter(post => {
      return post.node.frontmatter.project === project.node.frontmatter.category
    })

    createPage({
      path: project.node.fields.slug,
      component: projectTemplate,
      context: {
        slug: project.node.fields.slug,
        posts: projectPosts,
      },
    })
  })
}

function handlePosts(createPage, posts) {
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  posts.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
