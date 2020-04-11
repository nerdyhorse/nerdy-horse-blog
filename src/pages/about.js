import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div
        style={{
          marginTop: `30px`,
          fontFamily: `Montserrat`,
          color: "#212121",
          fontWeight: "400",
        }}
      >
        <h1>This is Nerdy Horse</h1>
        This is Nerdy Horse's anonymous blog. Over here I will add some of the
        things which I feel will be helpful to others as I learn them. More
        about me will follow once I figure it out myself.
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
