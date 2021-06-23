import React, { useState } from "react"
import { FaCircle } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Title from "./Title"

const Experience = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiJob(sort: { order: DESC, fields: strapiId }) {
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
  `)

  const [value, setValue] = useState(0)
  const { company, position, date, desc } = data.allStrapiJob.nodes[value]

  return (
    <section className="section">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="job-btn-container">
          {data.allStrapiJob.nodes.map((job, index) => {
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
                <FaCircle className="job-icon"></FaCircle>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Experience
