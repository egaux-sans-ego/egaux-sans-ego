import React, { useMemo } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/main";

// markup
const ServicesPage = ({ data }) => {
  const company = useMemo(
    () => ({
      history: data.companyYaml.history.replace(
        / +[!?:]/g,
        (token) => "\u00a0" + token[token.length - 1]
      ),
      people: data.companyYaml.people.map((person) => ({
        ...person,
        img: person.img.childImageSharp.fluid,
      })),
    }),
    [data]
  );

  return <Layout></Layout>;
};

export default ServicesPage;

export const query = graphql`
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
`;
