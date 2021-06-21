import React from "react"
import { Link } from "gatsby"
import Title from "./Title"
import Project from "./Project"

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          More Projects
        </Link>
      )}
    </section>
  )
}

export default Projects
