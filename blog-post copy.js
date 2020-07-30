import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

export const pageQuery = graphql`
  query BlogPostBySlug($id: ID!) {
    gcms {
      post(where: {id: $id}) {
        title
        slug
        date
        preview
        body
      }
    }
  }   
`;


const BlogPostTemplate = ({
  data: {
      gcms: { post },
    },
  }) => (
  //const { previous, next } = pageContext
  //const siteTitle = data.site.siteMetadata.title
  
    <React.Fragment>
    <Layout>
      <SEO
        title={post.title}
        description={post.preview}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.body }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
    </React.Fragment>
  );


export default BlogPostTemplate;
