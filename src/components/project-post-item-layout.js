import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
import React from "react"

const ProjectPostItem = ({posts}) => {
  return (
    <div>
      <h3 style={{marginBottom: rhythm(1 / 10),}}>
        {`Recent Posts for this Project`}
      </h3>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article
            key={node.fields.slug}
            style={{
              marginTop: `-15px`,
              marginBottom: `70px`,
            }}
          >
            <header>
              <h5
                style={{
                  marginBottom: rhythm(1 / 10),
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    color: "#000000",
                    fontSize: `18px`,
                    fontWeight: `400`,
                    fontFamily: `Montserrat`,
                  }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h5>
              <small
                style={{
                  color: "#B7B7B7",
                  fontSize: `11px`,
                  fontWeight: `300`,
                }}
              >
                {node.frontmatter.date}
              </small>
            </header>
            <section
              style={{ color: "#888888", fontSize: `14px`, fontWeight: `300` }}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </div>
  )
}

export default ProjectPostItem