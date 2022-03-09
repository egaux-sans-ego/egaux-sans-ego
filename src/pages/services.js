import React, { useMemo } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/main";

/// markup
const ServicesPage = ({ data }) => {
  const services = useMemo(
    () =>
      data.allServicesYaml.nodes.map((service) => ({
        ...service,
        img: {
          src: service.img.src.publicURL,
          description: service.img.description,
        },
        description: service.description.childMarkdownRemark.html,
      })),
    [data]
  );

  return <Layout></Layout>;
};

export default ServicesPage;

export const query = graphql`
  query {
    allServicesYaml {
      nodes {
        name
        slug
        img {
          src {
            publicURL
          }
          description
        }
        url
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
