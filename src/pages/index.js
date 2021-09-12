import * as React from "react"
import { graphql, Link } from 'gatsby';
import Layout from '../components/layouts/main'

function shortenText(text, length) {
    return (text.length < length)
         ? text
         : text.slice(0, length - 3) + "…";
}

function Service({value: service}) {

  const name = service.name;
  const slug = service.slug;
  const description = shortenText(service.description, 150);

  return (<div>
    <h3><Link to={`/services/${slug}`}>{name.toUpperCase()}</Link></h3>
    <p>{description}</p>
  </div>)
}


// markup
const IndexPage = ({ data }) => {
  const services = data.allService.nodes;
  const company = data.company;
  return (
    <Layout>
      <title>{company.name}</title>
      <h1>{company.name}</h1>

      <h2>Services</h2>
      {services.map(service => (<Service value={service} />))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    company {
      name
    }
    allService {
      nodes {
        name
        slug
        description
      }
    }
  }
`
