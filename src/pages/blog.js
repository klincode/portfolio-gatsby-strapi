import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"


const Blog = ({ data: { allStrapiBlogs: { nodes: blogs } } }) => {
  return <Layout>
    <section className="blog-page">
      <Blogs blogs={blogs} title="Blog" />
    </section>
  </Layout>
}
export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        title
        content
        date(formatString: "MM dd,YYYY")
        id
        desc
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
