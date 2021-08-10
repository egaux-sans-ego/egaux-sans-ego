import * as React from "react"
import Services from '../../content/services.yaml'
import Layout from '../components/layouts/main'

// markup
const ServicesPage = () => {
  return (
    <Layout>
      <a href={Services.inscription.url}>{Services.inscription.call_to_action}</a>
    
      {Services.servicesList.map(service => (<div>
        <h2>{service.name.toUpperCase()}</h2>
        <p>{service.description}</p>
      </div>))}
    </Layout>
  )
}

export default ServicesPage
