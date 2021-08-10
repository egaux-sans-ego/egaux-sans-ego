import * as React from "react"
import Company from '../../content/company.yaml'
import Layout from '../components/layouts/main'

// markup
const ServicesPage = () => {
  return (
    <Layout>
      <h2>Notre histoire</h2>
      <p>{Company.history}</p>
 
      {Company.people.map(person => (<div>
        <h2>{person.name.toUpperCase()}</h2>
        <p>{person.title}</p>
      </div>))}
    </Layout>
  )
}

export default ServicesPage
