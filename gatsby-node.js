const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query AllProducts {
      products: allProductsJson {
        nodes {
          category
          description
          title
          slug
          price
          variants
          size
          imgs {
            childImageSharp {
              fluid {
                ...DefaultFluidFields
              }
            }
          }
        }
      }
    }

    fragment DefaultFluidFields on ImageSharpFluid {
      base64
      aspectRatio
      src
      srcSet
      sizes
    }
  `);
  const products = data.products.nodes;

  products.forEach((product) => {
    actions.createPage({
      path: `/produkty/${product.slug}`,
      component: path.resolve('./src/templates/product-details.js'),
      context: { ...product },
    });
  });
};
