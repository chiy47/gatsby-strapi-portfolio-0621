import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Title from "../components/Title"

const contact = () => {
  return (
    <>
      <section className="section">
        <Title title="Contact Me" />
        <div className="section-center contact-center">
          <StaticImage
            src="../assets/images/contact.jpg"
            alt="contact"
            className="contact-img"
            placeholder="blurred"
            layout="constrained"
          />
          <article className="contact-form">
            <h3>get in touch</h3>
            <form className="form-container" method="POST" data-netlify="true">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="form-control"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="form-control"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="message"
                  className="form-control"
                ></textarea>
              </div>
              <div data-netlify-recaptcha="true"></div>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </article>
        </div>
      </section>
    </>
  )
}

export default contact
