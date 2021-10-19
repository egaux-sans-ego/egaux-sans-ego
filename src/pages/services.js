import React, {useMemo} from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/main';

/// markup
const ServicesPage = ({ data }) => {

  const services = useMemo(() =>
      data.allServicesYaml.nodes.map(service => ({
          ...service,
          img: {
              src: service.img.src.publicURL,
              description: service.img.description
          },
          description: service.description.childMarkdownRemark.html
      })), [data]);

  return (
    <Layout>

      <a id="CTA" href="https://www.psylio.com/ca/professionals/catherine-laroche?lg=fr ">Inscrivez-vous dès maintenant</a>
      <section className="flex bgLight flexCol service">
        {services.map(service => (<div id={service.slug} className="fElement">
          <h2 className="h2Smaller">{service.name}</h2>
          <img src={service.img.src} alt={service.img.description} />
          <div dangerouslySetInnerHTML={{__html: service.description}} />
          <a className="btnCTA" href={service.url}>En savoir plus</a>
        </div>))}
      </section>
    </Layout >
  )
}

export default ServicesPage

export const query = graphql`
  query {
    allServicesYaml {
      nodes {
        name
        slug
        img {
          src {
            publicURL
          }
          description
        }
        url
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
