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
  return <Layout></Layout>;
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
