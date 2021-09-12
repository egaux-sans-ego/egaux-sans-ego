import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/main';

// markup
const ServicesPage = ({ data }) => {

  const company = data.company

  return (
    <Layout>
      <h2>Notre histoire</h2>
      <p>{company.history}</p>
 
      {company.people.map(person => (<div>
        <h2>{person.name.toUpperCase()}</h2>
        <p>{person.title}</p>
      </div>))}
    </Layout>
  )
}

export default ServicesPage

export const query =
  graphql`
    query {
      company {
        history
        people {
          name
          title
        }
      }
    }
  `
