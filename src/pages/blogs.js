import React from "react"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const blogs = ({ data }) => {
  const {
    allStrapiBlog: { nodes: blogs },
  } = data
  return (
    <main>
      <section className="blogs-page">
        <Blogs title="Blogs" blogs={blogs} />
      </section>
    </main>
  )
}

export const query = graphql`
  {
    allStrapiBlog {
      nodes {
        desc
        id
        title
        content
        slug
        date
        author
        category
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

export default blogs
