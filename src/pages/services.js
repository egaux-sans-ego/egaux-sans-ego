import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layouts/main';

/// markup
const ServicesPage = ({ data }) => {

  const services = data.allService.nodes;

  return (
    <Layout>

      <a id="CTA" href="https://www.psylio.com/ca/professionals/catherine-laroche?lg=fr ">Inscrivez-vous dès maintenant</a>
      <section class="flex bgLight flexCol service">
        {services.map(service => (<div id={service.slug} class="fElement">
          <h2 class="h2Smaller">{service.name}</h2>
          <p> <img src={service.img}/> {service.description}</p>
          <a class="btnCTA" href={service.url}>En savoir plus</a>
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
