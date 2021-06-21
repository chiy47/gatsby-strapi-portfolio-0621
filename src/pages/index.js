import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Projects from "../components/Projects"

const Home = ({ data }) => {
  console.log(data)

  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <>
      <Hero />
      <Projects projects={projects} title="projects" showLink />
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        desc
        featured
        github
        id
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        stack {
          id
          title
        }
        title
        url
      }
    }
  }
`

export default Home
