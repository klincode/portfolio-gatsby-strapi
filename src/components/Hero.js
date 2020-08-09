import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    name
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
const Hero = () => {
  const { file: { childImageSharp: { fluid: image } } } = useStaticQuery(query);

  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"> </div>
          <h1>I'm Adam</h1>
          <h4>freelance front-ende developer</h4>
          <Link to="/contact" className="btn">Contact me</Link>
          <SocialLinks />
        </div>
      </article>
      <Image fluid={image} className="hero-img" />
    </div>
  </header>
}

export default Hero
