import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/main';

// markup
const ServicesPage = ({ data }) => {

  const company = data.company

  return (
    <Layout>
      <section class="flex flexCol">
        <h2>Notre histoire</h2>
        <div class="flexApropos">
        <p class="smallP">{company.history}</p>
        <div class="groupeImage"></div>
        </div>
      </section>

      <section class="flex bgBlanc">
        {company.people.map(person => (<div class="fElement memberElement">
          <h2 class="h2Smaller">{person.name}</h2>
          <img class="memberImg" src={person.img}/>
          <p>{person.title}</p>
        </div>))}
      </section>
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
          img
        }
      }
    }
  `
