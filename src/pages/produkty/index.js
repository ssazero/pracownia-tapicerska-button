import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../containers/Layout';
import Seo from '../../components/SEO';
import ProductItem from '../../components/ProductItem';
import CategoryRadio from '../../components/CategoryRadio';

const Products = ({ data }) => {
  const [category, setCategory] = React.useState('all');
  const beds = data.beds.nodes;
  const sofas = data.sofas.nodes;
  const products = []
    .concat(beds, sofas)
    .filter((product) =>
      category !== 'all' ? category === product.category : true
    );

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Layout>
      <Seo title='Produkty' description='...' />
      <h1 className='section-title'>
        <span>Produkty</span>
      </h1>
      <CategoryRadio category={category} onCategoryChange={onCategoryChange} />
      <section className='products'>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            description={product.description}
            variants={product.variants.length}
            slug={product.slug}
            price={product.price}
            img={product.img.childImageSharp.fluid}
          />
        ))}
        {products.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            description={product.description}
            variants={product.variants.length}
            slug={product.slug}
            price={product.price}
            img={product.img.childImageSharp.fluid}
          />
        ))}
      </section>
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
        variants
        description
        title
        slug
        price
        id
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
        variants
        description
        title
        slug
        price
        id
      }
    }
  }
`;
