import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../containers/Layout';
import Seo from '../../components/SEO';
import ProductItem from '../../components/ProductItem';
import CategoryRadio from '../../components/CategoryRadio';

const Products = ({ data }) => {
  const [category, setCategory] = React.useState('all');
  const products = data.products.nodes.filter((product) => (category !== 'all' ? category === product.category : true));

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Layout compress>
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
            img={product.imgs[0].childImageSharp.fluid}
          />
        ))}
        {/* {products.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            description={product.description}
            variants={product.variants.length}
            slug={product.slug}
            price={product.price}
            img={product.imgs[0].childImageSharp.fluid}
          />
        ))} */}
      </section>
    </Layout>
  );
};

export default Products;

export const query = graphql`
  query AllProducts {
    products: allProductsJson {
      nodes {
        imgs {
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
