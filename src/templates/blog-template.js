import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const ComponentName = ({ data }) => {
  const { title, content, image, desc } = data.blog;
  console.log(data);
  return <Layout>
    <section className="blog-template">
      <div className="section-center">
        <article className="blog-content">
          <ReactMarkdown source={content} />
          <Link to="/blog" className="btn center-btn" >Blog</Link>
        </article>
      </div>
    </section>
    {/* <h2>{title}</h2> */}
  </Layout>
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
    }
  }
`

export default ComponentName
