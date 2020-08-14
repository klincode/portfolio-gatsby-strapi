import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
const About = ({ data: { about: { nodes } } }) => {
  console.log(nodes[0]);
  return <Layout>d</Layout>
}

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        info
        stack {
          id
          title
        }
        title
      }
    }
  }
`

export default About
