import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import socialLinks from "../constants/social_links"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <h1>I'm Chi</h1>
          <h4>
            <span>Full-Stack Web Developer</span>
          </h4>
          <Link to="/contact" className="btn">
            Contact Me
            <i class="arrow right"></i>
          </Link>
          <div className="social-links">
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
        </article>
        <StaticImage
          src="../assets/images/hero.jpg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
          layout="constrained"
        />
      </section>
    </header>
  )
}

export default Hero
