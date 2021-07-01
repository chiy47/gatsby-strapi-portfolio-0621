import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Title from "./Title"

const Education = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiEducation(sort: { order: DESC, fields: strapiId }) {
        nodes {
          school
          title
          date
        }
      }
    }
  `)

  return (
    <section className="section">
      <Title title="education" />
      <div className="jobs-center">
        <div className="job-btn-container">
          {data.allStrapiEducation.nodes.map((job, index) => {
            return (
              <article key={index} className="job-info">
                <h3>{job.title}</h3>
                <h4>{job.school}</h4>
                <p className="job-date">{job.date}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
