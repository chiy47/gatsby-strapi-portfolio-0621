import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaPenAlt, FaCalendar } from "react-icons/fa"
import PropTypes from "prop-types"

const Blog = ({ id, title, image, date, category, slug, desc, author }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id}>
      <article className="blog">
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={title}
          className="blog-img"
        />
        <div className="blog-card">
          <h3 className="blog-title">{title}</h3>
          <div className="blog-header">
            <p>
              <FaCalendar className="blog-icon"></FaCalendar>
              {date}
            </p>
            <p>
              <FaPenAlt className="blog-icon"></FaPenAlt>
              {author}
            </p>
          </div>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
