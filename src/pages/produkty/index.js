import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../containers/Layout';
import Seo from '../../components/SEO';
import ProductItem from '../../components/ProductItem';

const Products = ({ data }) => {
  const [category, setCategory] = React.useState('all');
  const beds = data.beds.nodes;
  const sofas = data.sofas.nodes;
  const products = []
    .concat(beds, sofas)
    .filter((product) =>
      category !== 'all' ? category === product.category : true
    );

  console.log(products);

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Layout>
      <Seo title='Produkty' description='...' />
      <h1 className='section-title'>
        <span>Produkty</span>
      </h1>
      <div className='product-category-radio' onChange={onCategoryChange}>
        <span className='product-category-radio__title'>
          Wybierz kategorię:
        </span>

        <div className='product-category-radio__option'>
          <label for='all'>Wszystkie</label>
          <input
            type='radio'
            id='all'
            name='category'
            value='all'
            checked={'all' === category}
          />
        </div>

        <div className='product-category-radio__option'>
          <label for='sofas'>Sofy</label>
          <input
            type='radio'
            id='sofas'
            name='category'
            value='sofa'
            checked={'sofa' === category}
          />
        </div>

        <div className='product-category-radio__option'>
          <label for='beds'>Łóżka</label>
          <input
            type='radio'
            id='beds'
            name='category'
            value='lozko'
            checked={'lozko' === category}
          />
        </div>
      </div>
      <div className='products'>
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
