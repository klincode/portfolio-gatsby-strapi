import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

import Navbar from '../components/Navbar';

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs }
  } = data;
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects
        projects={projects}
        title="featured Projects"
        showLink />
      <Blogs blogs={blogs} title="latest articles" showLink />
    </Layout>)
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        description
        id
        title
        url
        github
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }

    allStrapiBlogs(sort: {fields: id, order: DESC}, limit: 3) {
      
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

