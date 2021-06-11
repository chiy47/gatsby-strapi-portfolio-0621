import React from "react"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
import links from "../constants/links"
import socialLinks from "../constants/social_links"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button type="button" className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          {links.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.url} onClick={toggleSidebar}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={isOpen ? "social-links sidebar-icons" : null}>
          {socialLinks.map(link => {
            return (
              <li key={link.id}>
                <a href={link.url} className="social-link">
                  {link.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
