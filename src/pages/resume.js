import React, { useState } from "react"
import { FaAngleRight } from "react-icons/fa"
import { graphql } from "gatsby"
import Title from "../components/Title"

const Resume = ({ data }) => {
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = useState(0)
  const { company, position, date, desc } = jobs[value]

  return (
    <section className="section">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleRight className="job-icon"></FaAngleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export const query = graphql`
  {
    allStrapiJobs(sort: { order: DESC, fields: strapiId }) {
      nodes {
        company
        date
        position
        desc {
          id
          name
        }
        strapiId
      }
    }
  }
`

export default Resume
