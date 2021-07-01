import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

const Home = ({ data }) => {
  console.log(data)

  const {
    allStrapiProject: { nodes: projects },
    allStrapiBlog: { nodes: blogs },
  } = data
  return (
    <>
      <Hero />
      <Projects projects={projects} title="projects" showLink />
      <Blogs blogs={blogs} title="blogs" showLink />
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(filter: { featured: { eq: true } }) {
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

    allStrapiEducation {
      nodes {
        id
      }
    }
    allStrapiBlog(limit: 3, sort: { fields: date, order: DESC }) {
      nodes {
        slug
        content
        author
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default Home
