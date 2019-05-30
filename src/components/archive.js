/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
  query BlogArchiveQuery {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ul>
            {allMarkdownRemark.edges.map(edge => {
              return (
                <li key={edge.node.frontmatter.slug}>
                  <Link to={`/posts${edge.node.frontmatter.slug}`}>
                    {edge.node.frontmatter.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </aside>
      </>
    )}
  />
)

export default Archive
