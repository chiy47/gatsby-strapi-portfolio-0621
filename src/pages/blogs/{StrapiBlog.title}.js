import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaPenFancy, FaCalendar } from "react-icons/fa"

const BlogTemplate = ({ pageContext: { title }, data }) => {
  return (
    <>
      <main className="section blog-template-page">
        <h2 className="blog-page-title">{title}</h2>
        <div className="blog-header">
          <div className="blog-category-container">
            <p>{data.strapiBlog.category}</p>
          </div>
          <p>
            <FaCalendar className="blog-icon"></FaCalendar>
            {data.strapiBlog.date}
          </p>
          <p>
            <FaPenFancy className="blog-icon"></FaPenFancy>
            {data.strapiBlog.author}
          </p>
        </div>
        <img src={data.strapiBlog.image.localFile.publicURL} alt={title} />
        <p>{data.strapiBlog.desc}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query getSingleBlog($title: String) {
    strapiBlog(title: { eq: $title }) {
      desc
      date
      author
      category
      title
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default BlogTemplate
