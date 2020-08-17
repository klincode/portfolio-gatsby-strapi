import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return <Layout>
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch
        <form action="https://formspree.io/mvownplg" method="POST">
            <div className="form-group">
              <input type="text" placeholder="name" className="form-control" />
              <input type="email" placeholder="email" className="form-control" />
              <textarea name="message" placeholder="message" className="form-control"></textarea>
              <button type="submit" className="submit-btn btn">Submit here</button>
            </div>
          </form>
        </h3>
      </article>
    </section>
  </Layout>
}

export default contact
