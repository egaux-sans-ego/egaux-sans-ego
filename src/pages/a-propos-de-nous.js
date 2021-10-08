import React, {useMemo} from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/main';

// markup
const ServicesPage = ({ data }) => {

  console.log(data);

  const company = useMemo(() => ({
      history: data.companyYaml.history,
      people: data.companyYaml.people.map(person => ({
          ...person,
          img: person.img.childImageSharp.fluid
      }))
  }), [data])

  console.log(company)

  return (
    <Layout>
      <section className="flex flexCol">
        <h2>Notre histoire</h2>
        <div className="flexApropos">
        <p className="smallP">{company.history}</p>
        <div className="groupeImage"></div>
        </div>
      </section>

      <section className="flex bgBlanc">
        {company.people.map(person => (<div key={person.name} className="fElement memberElement">
          <h2 className="h2Smaller">{person.name}</h2>
          <img className="memberImg" srcSet={person.img.srcSet} alt={person.name}/>
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
      companyYaml {
        history
        people {
          name
          title
          img {
            childImageSharp {
              fluid {
                srcSet
              }
            }
          }
        }
      }
    }
  `
