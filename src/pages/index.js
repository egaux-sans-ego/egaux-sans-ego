import * as React from "react"
import Company from '../../content/company.yaml'
import Services from '../../content/services.yaml'
import Layout from '../components/layouts/main'

function shortenText(text, length) {
    return (text.length < length)
         ? text
         : text.slice(0, length - 3) + "…";
}



function Service({value: service}) {

  const name = service.name;
  const description = shortenText(service.description, 150);

  return (<div>
    <h3>{name}</h3>
    <p>{description}</p>
  </div>)

}


// markup
const IndexPage = () => {
  return (
    <Layout>
      <title>{Company.name}</title>
      <h1>{Company.name}</h1>

      <h2>Services</h2>
      {Services.servicesList.map(service => (<Service value={service} />))}

    </Layout>
  )
}

export default IndexPage
