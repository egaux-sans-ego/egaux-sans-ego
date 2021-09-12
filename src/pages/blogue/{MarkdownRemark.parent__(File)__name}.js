import * as React from 'react';
import Layout from "../../components/layouts/main";
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {

    const post = data.markdownRemark;
    const isEdited =
      post.parent.birthTime !== post.parent.modifiedTime;

    return (<Layout>
      <h1>{ post.frontmatter.title }</h1>
      <span>{ post.parent.birthTime }</span>
      {isEdited && (<span>Edited {post.parent.modifiedTime}</span>) }
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>)
}

export default BlogPost;

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
      parent {
        ... on File {
          id
          name
          birthTime
          modifiedTime
        }
      }
    }
  }
`
