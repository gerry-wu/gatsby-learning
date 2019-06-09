import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

const POST_ARCHIVE_QUERY = graphql`
  query ArchivedPost {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___title], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM, DD YYYY ")
          }
        }
      }
    }
  }
`

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  font-family: helvetica;
  font-size: 0.8rem;
  text-decoration: underline;
  color: #524763;
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ArchiveList>
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.slug}>
                <Link to={`/posts${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ArchiveList>
        </aside>
      </>
    )}
  />
)

export default Archive
