import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Title from "../components/Title"
import Seo from "../components/Seo"

const about = ({ data }) => {
  const {
    strapiAbout: { title, image, info },
  } = data
  return (
    <>
      <Seo title="About" />
      <section className="section">
        <Title title={title} />
        <div className="section-center about-center">
          <GatsbyImage
            image={image.localFile.childImageSharp.gatsbyImageData}
            alt={title}
            className="about-img"
          />
          <article className="about-text">
            <p>{info}</p>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    strapiAbout {
      title
      info
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default about
