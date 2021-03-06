import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ description, title, id, github, url, stack, image, index }) => {

  return <article className="project">
    <Image fluid={image.childImageSharp.fluid} className="project-img" />
    <div className="project-info">
      <span className="project-number">{index + 1}</span>
      <h3>{title}</h3>
      <p className="project-description">{description}</p>

      <div className="project-stack">
        {stack.map(((item, index) => {
          return <span key={item.index}>{item.title}</span>
        }))}
      </div>
      <div className="project-links">
        <a href={github}><FaGithubSquare className="project-icon" /></a>
        <a href={url}><FaShareSquare className="project-icon" /></a>
      </div>
    </div>
  </article>
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object)
}

export default Project
