import * as React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../components/layouts/main'


export default function AccompagnementPersonnalise({ data }) {
  const service = data.service;
  return (<Layout>
    <h1>{service.name}</h1>
    <p>{service.description}</p>
  </Layout>)
}

export const query = graphql`
  query($slug: String!) {
    service(slug: { eq: $slug }) {
      name
      description 
    }
  }
`

