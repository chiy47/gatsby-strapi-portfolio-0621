import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { FaGithub, FaShare } from "react-icons/fa"

const Project = ({ title, desc, github, url, image, stack, index }) => {
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(image)}
        alt={title}
        className="project-img"
      />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{desc}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github} target="blank">
            <FaGithub className="project-icon"></FaGithub>
          </a>
          <a href={url} target="blank">
            <FaShare className="project-icon"></FaShare>
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
