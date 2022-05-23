import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../../containers/layout';
import SEO from '../../components/seo';

const Products = ({ data }) => {
  const products = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <SEO
        title='Produkty'
        description='Button - Autorska pracownia tapicerska - Grzegorz Smagło. Do każdego zlecenia podchodzimy z zaangażowaniem, a także pełnym profesjonalizmem. Nasi Klienci docenili nasz kunszt i przy każdej okazji podkreślają, iż polecają nasz zakład tapicerski znajomym i rodzinie. Jesteśmy wdzięczni za pokładane w nas zaufanie i zapewniamy, że jakość naszych usług stale wzrasta, wciąż podwyższamy poprzeczkę i szlifujemy umiejętności.'
      />
      <h1 className='section-title'>
        <span>Produkty</span>
      </h1>
      <div className='products'>
        {products.map((product) => (
          <Link to={`/produkty/${product.frontmatter.slug}`} key={product.id}>
            <div>
              <h3>{product.frontmatter.title}</h3>
              <p>{product.frontmatter.stack}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Products;

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
`;
