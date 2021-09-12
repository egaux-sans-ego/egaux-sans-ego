import * as React from "react";
import Layout from "../components/layouts/main";
import { Link, graphql } from "gatsby";

const Post = ({value: post}) => {

  const isEdited =
    post.birthTime !== post.modifiedTime;

  return (
    <article>
      <h2><Link to={'/blogue/' + post.name }>{post.childMarkdownRemark.frontmatter.title}</Link></h2>
      <span>{ post.birthTime }</span>
      {isEdited && (<span>Edited {post.modifiedTime}</span>) }
      <p>{post.childMarkdownRemark.excerpt}</p>
    </article>
  );
}

const Blog = ({data}) => (<Layout>
    <ul>
      {data.allFile.nodes.map(post => <Post value={post} key={post.id} />)}
    </ul>
</Layout>)

export default Blog;

export const query = graphql`
  query {
    allFile(
      sort: {order: DESC, fields: birthTime}
      filter: {sourceInstanceName: {eq: "blog"}}
    ) {
      nodes {
        childMarkdownRemark {
          html
          frontmatter {
            title
          }
          excerpt
        }
        name
        modifiedTime
        birthTime
        id
      }
    }
  }
`
