import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../containers/layout';
import Partner from '../components/partner';

const Partners = () => {
  const { partners } = useStaticQuery(query);

  return (
    <Layout>
      <SEO
        title='Partnerzy'
        description='Nasi partnerzy: Projekt W, Kameleoon'
      />
      <article className='partners'>
        <h1 className='section-title'>
          <span>Partnerzy</span>
        </h1>
        <div className='partners__content'>
          {partners.nodes.map((partner) => (
            <Partner
              key={partner.id}
              link={partner.link}
              src={partner.img.childImageSharp.fluid}
              alt={partner.alt}
              style={partner.style}
            />
          ))}
        </div>
      </article>
    </Layout>
  );
};

export default Partners;

export const query = graphql`
  query AllPartners {
    partners: allPartnersJson {
      nodes {
        id
        link
        img {
          id
          childImageSharp {
            fluid {
              aspectRatio
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        style {
          padding
        }
      }
    }
  }
`;
