import * as React from "react"
import Services from '../../../content/services.yaml'
import Layout from '../../components/layouts/main'


export default function AccompagnementPersonnalise() {
  const service = Services.services["accompagnement-personnalise"];
  return (<Layout>
    <h1>{service.name}</h1>
    <p>{service.description}</p>
  </Layout>)
}
