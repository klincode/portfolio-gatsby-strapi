import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from '../components/SEO';

const ComponentName = ({ data }) => {
  const { title, content, image, desc } = data.blog;
  console.log(data);
  return <Layout>
    <SEO title={title} description={desc} />
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
      desc
    }
  }
`

export default ComponentName
