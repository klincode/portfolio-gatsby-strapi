import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
const About = ({ data: { about: { nodes } } }) => {
  const { info, stack, title, image } = nodes[0]
  return <Layout>
    <section className="about-page">
      <div className="about-center section-center">
        <Image fluid={image.childImageSharp.fluid} className="about-img" />

        <article className="about-text">
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
            {stack.map((item) => {
              return (
                <span key={item.id}>{item.title}</span>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  </Layout>
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
