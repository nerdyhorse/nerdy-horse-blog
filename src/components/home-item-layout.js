import { rhythm } from "../utils/typography"
import React from "react"
import { Link } from "gatsby"

const HomeItemLayout = ({title, items}) => {
  return (
    <article style={{ padding: `0px 15px 15px 15px` }}>
      <h1
        style={{
          marginTop: rhythm(1),
          marginBottom: 0,
        }}
      >
        {title}
      </h1>
      {items.map(({ node }) => {
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
              <h3
                style={{
                  marginBottom: rhythm(1 / 10),
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    color: "#000000",
                    fontSize: `21px`,
                    fontWeight: `400`,
                    fontFamily: `Montserrat`,
                  }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
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
              style={{ color: "#888888", fontSize: `17px`, fontWeight: `300` }}
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
    </article>
  )
}

export default HomeItemLayout