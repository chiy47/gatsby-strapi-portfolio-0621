import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Title from "../components/Title"
import Seo from "../components/Seo"

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <>
      <Seo title="Contact" />
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
            <form
              className="form-container"
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="form-control"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="form-control"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="message"
                  className="form-control"
                  value={formState.message}
                  onChange={handleChange}
                  required
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

export default Contact
