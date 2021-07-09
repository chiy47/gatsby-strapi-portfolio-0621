import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="Not Found" />
      <main>
        <div className="section error-center">
          <h2>oops it's a dead end</h2>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
