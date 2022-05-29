import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../../containers/layout';
import SEO from '../../components/seo';

const Products = ({ data }) => {
  const beds = data.beds.nodes;
  const sofas = data.sofas.nodes;
  const products = new Array().concat(beds, sofas);

  console.log(products);

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
          <Link to={`/produkty/${product.slug}`} key={product.id}>
            <div>
              <h3>{product.title}</h3>
              <p>{product.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Products;

export const query = graphql`
  query AllProducts {
    beds: allBedsJson {
      nodes {
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category
        title
        slug
      }
    }
    sofas: allSofasJson {
      nodes {
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category
        title
        slug
      }
    }
  }
`;
