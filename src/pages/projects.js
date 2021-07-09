import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const projects = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data
  return (
    <>
      <Seo title="Projects" />
      <main>
        <section className="projects-page">
          <Projects title="Projects" projects={projects} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        desc
        featured
        github
        id
        title
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`

export default projects
