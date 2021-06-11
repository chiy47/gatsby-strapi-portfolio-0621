import React from "react"
import socialLinks from "../constants/social_links"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links ">
        {socialLinks.map(link => {
          return (
            <a
              href={link.url}
              key={link.id}
              className="social-link"
              target="blank"
            >
              {link.icon}
            </a>
          )
        })}
      </div>
      <h4>
        copyright&copy;{new Date().getFullYear()}
        <span>Chi</span>
      </h4>
      <p>all right reserved</p>
    </footer>
  )
}

export default Footer
