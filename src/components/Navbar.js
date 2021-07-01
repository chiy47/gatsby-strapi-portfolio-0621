import React from "react"
import { Link } from "gatsby"
import { FaAlignCenter } from "react-icons/fa"
import pageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h1>Chi</h1>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignCenter />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
