import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>Jixxy Blog - Get the Latest news before others</title>
    </Helmet>
    <Seo title="Home" />
    <div>
      <h1>Welcome to Jixxy Blog!</h1>
      {
        data.allMarkdownRemark.edges.map(({ node }) => {
          return <div key={node.id}>
            <BlogLink to={node.fields.slug}><BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle></BlogLink>
            <p>{node.excerpt}</p>
          </div>
        })
      }
    </div>
  </Layout >
)

export const Head = () => <Seo title="Home" />

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`
