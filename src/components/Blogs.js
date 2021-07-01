import React from "react"
import { Link } from "gatsby"
import Title from "./Title"
import Blog from "./Blog"

const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section blogs">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
        <div className="btn-container">
          {showLink && (
            <Link to="/blogs" className="btn">
              More Blogs
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default Blogs
