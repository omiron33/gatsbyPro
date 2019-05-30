import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`

const listing = () => {
  return (
    <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark }) =>
        allMarkdownRemark.edges.map(edge => (
          <article key={edge.node.frontmatter.slug}>
            <h2>{edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.date}</p>
            <p>{edge.node.excerpt}</p>
            <Link to={`/posts${edge.node.frontmatter.slug}`}>Read More</Link>
          </article>
        ))
      }
    />
  )
}

export default listing
