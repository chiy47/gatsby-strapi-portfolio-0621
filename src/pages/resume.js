import React from "react"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Seo from "../components/Seo"

const Resume = () => {
  return (
    <>
      <Seo title="Resume" />
      <Experience />
      <Education />
    </>
  )
}

export default Resume
