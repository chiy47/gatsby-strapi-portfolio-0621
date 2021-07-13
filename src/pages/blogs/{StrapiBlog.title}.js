import React from "react"
import { graphql } from "gatsby"
import { FaPenAlt, FaCalendar } from "react-icons/fa"
import Seo from "../../components/Seo"

const BlogTemplate = ({ pageContext: { title }, data }) => {
  return (
    <>
      <Seo
        title={data.strapiBlog.title}
        description={data.strapiBlog.content}
        image={data.strapiBlog.image.publicURL}
      />
      <main className="section blog-template-page">
        <div className="blog-page-header">
          <h2 className="blog-page-title">{title}</h2>
          <div className="blog-category-container">
            <p>{data.strapiBlog.category}</p>
          </div>
          <div className="blog-info-container">
            <p>
              <FaCalendar className="blog-icon"></FaCalendar>
              {data.strapiBlog.date}
            </p>
            <p>
              <FaPenAlt className="blog-icon"></FaPenAlt>
              {data.strapiBlog.author}
            </p>
          </div>
        </div>
        <img
          className="blog-page-img"
          src={data.strapiBlog.image.localFile.publicURL}
          alt={title}
        />
        <p className="blog-page-desc">{data.strapiBlog.content}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query getSingleBlog($title: String) {
    strapiBlog(title: { eq: $title }) {
      content
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
