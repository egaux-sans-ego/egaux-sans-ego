import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layouts/main";
import logoPresentation from "../images/logos/projets_black.svg";

function Service({ value: service }) {
  const name = service.name;
  const slug = service.slug;
  const description = service.short_description.childMarkdownRemark.html;

  return (
    <div class="fElement">
      <h3>{name}</h3>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <Link class="btnCTA" to={`/services#${slug}`}>
        En savoir plus
      </Link>
    </div>
  );
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
            <p class="catchPhrase">
              <span>Apprendre pour mieux se comprendre.</span>
              <br />
              <span>C'est les valeurs qui nous animent!</span>
            </p>
          </div>
        </section>

        <section class="flex flexFAQ">
          <div class="fElement">
            <h3>Notre mission</h3>
            <p>
              Prévenir les troubles de la santé mentale ainsi qu'éduquer sur les
              enjeux associés par une approche cognitive qui accompagnera les
              adolescents et les adultes à désamorcer des comportements
              nuisibles.
            </p>
          </div>

          <div class="fElement">
            <h3>Notre vision</h3>
            <p>
              Amener les individus de la société à diminuer les comportements
              nuisibles de l'égo afin d'augmenter leur sentiment de bien-être.
            </p>
          </div>

          <div class="fElement">
            <h3>Nos valeurs</h3>
            <p>
              <strong>Liberté</strong> : Promouvoir la liberté de posséder sa
              propre couleur ainsi que la liberté de créer à sa juste valeur.
            </p>
            <p>
              <strong>Bienveillance</strong> : Avoir l'intention d'être dans la
              bienveillance en entraide comme avec soi-même.
            </p>
            <p>
              <strong>Ouverture d'esprit</strong> : Être dans l'ouverture
              d'esprit afin de ressentir l'unicité de l'équipe dans chaque
              projet.
            </p>
          </div>
        </section>

        <section class="flex flexFAQ">
          <div class="flexMission">
            <img src={logoPresentation} alt="Logo gros format" />
            <p>
              Projets Égaux sans ego est un organisme sans but lucratif qui
              œuvre dans le domaine des services sociaux. Nous croyons que de
              posséder les outils nécessaires pour améliorer ses perceptions
              envers soi-même et autrui mène à se libérer du masque social, qui
              nous empêche de s'épanouir à notre juste valeur.
            </p>
          </div>
        </section>

        <section class="bgLight">
          <h2>Nos Services</h2>
          <div class="flex">
            {services.map((service) => (
              <Service value={service} key={service.slug} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

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
`;
