import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layouts/main';

/// markup
const ServicesPage = ({ data }) => {

  const services = data.allService.nodes;

  return (
    <Layout>
      <section>
        <a href="https://bookwhen.com/fr/egauxsansego">Inscrivez-vous dès maintenant</a>

        {services.map(service => (<div>
          <h2><Link to={`/services/${service.slug}`}>{service.name.toUpperCase()}</Link></h2>
          <p>{service.description}</p>
        </div>))}
      </section>
    </Layout >
  )
}

export default ServicesPage

export const query = graphql`
  query {
    allService {
      nodes {
        name
        slug
        description
      }
    }
  }
`
