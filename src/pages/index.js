import * as React from "react"
import { graphql, Link } from 'gatsby';
import Layout from '../components/layouts/main'
import logoPresentation from '../images/logos/projets_black.svg'

function shortenText(text, length) {
  return (text.length < length)
    ? text
    : text.slice(0, length - 3) + "…";
}

function Service({ value: service }) {


  const name = service.name;
  const slug = service.slug;
  const description = service.short_description.childMarkdownRemark.html;

  return (<div class="fElement">
    <h3>{name}</h3>
    <p dangerouslySetInnerHTML={{__html: description}} />
    <Link class="btnCTA" to={`/services#${slug}`}>En savoir plus</Link>
  </div>)
}


// markup
const IndexPage = ({ data }) => {
  const services = data.allServicesYaml.nodes;
  const company = data.companyYaml;
  return (
    <Layout>
      <div class="index">
        <title>{company.name}</title>
        <section>
          <div class="layer">
            <h1>{company.name}</h1>
            <p class="catchPhrase"><span>Égalité, ouverture d’esprit, empathie, éducation et entraide.</span><br />
              <span>C'est les valeurs qui nous animent!</span></p>
          </div>
        </section>

        <section class="flex flexFAQ">
          <div class="fElement">
            <h3>Est-ce-que c'est pour moi?</h3>
            <p>Les individus qui vivent avec des troubles de santé mentale, leurs proches, ainsi que toute personne de la population générale qui souhaite apprendre à mieux vivre avec ses vulnérabilités.</p>
          </div>

          <div class="fElement">
            <h3>Notre vision</h3>
            <p>Nous croyons que tous les humains naissent libres et égaux en dignité et en droit. En public, nous camouflons nos vulnérabilités sous un masque, agissant ainsi selon les standards de la société.</p>
          </div>

          <div class="fElement">
            <h3>Entraidons-nous</h3>
            <p>Contrairement aux courants de pensée populaire, nous croyons que le fait de se montrer vulnérable n’est pas une démonstration de faiblesse, mais bien une preuve de force et de courage.</p>
          </div>
        </section>

        <section class="flex flexFAQ">
          <div class="flexMission">
            <img src={logoPresentation} />
            <p>Projets Égaux sans ego est un organisme sans but lucratif qui œuvre dans le domaine des services sociaux. Notre mission est de rendre l’éducation sur les troubles de santé mentale accessible à la population générale, tout en sensibilisant aux enjeux associés.

              Notre approche préventive ainsi que notre accompagnement personnalisé aideront à diminuer les risques de développer un trouble de santé mentale et permettront de trouver les outils nécessaires pour atteindre les objectifs personnels de notre clientèle.</p>
          </div>
        </section>

        <section class="bgLight">
          <h2>Nos Services</h2>
          <div class="flex">
            {services.map(service => (<Service value={service} />))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    companyYaml {
      name
    }
    allServicesYaml {
      nodes {
        name
        slug
        short_description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
