import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"


const pageQuery = graphql`
   {
    site {
      siteMetadata {
        title
      }
    }
    gcms {
      posts {
          title
          slug
          date
          preview
          body
      }
    }
  }
`

const IndexPage = ({ location }) => {
  //const siteTitle = data.site.siteMetadata.title
  const {
    gcms: { posts },
        } = useStaticQuery(pageQuery);

  return posts.map(({ slug, ...post }) => (
      <Layout location={location} >
      <SEO title="All posts" />
      <Bio />
    <article key={slug}>
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={`/blog/${slug}`}>
            {post.title}
          </Link>
        </h3>
        <small>{post.date}</small>
      </header>
      <section>
        <p>
          {post.preview}
        </p>
      </section>
    </article>
    </Layout>
 ))
};


export default IndexPage;
