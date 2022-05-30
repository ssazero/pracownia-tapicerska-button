const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query AllProducts {
      beds: allBedsJson {
        nodes {
          category
          description
          title
          slug
          price
          variants
          size
          img {
            childImageSharp {
              fluid {
                ...DefaultFluidFields
              }
            }
          }
        }
      }
      sofas: allSofasJson {
        nodes {
          category
          description
          title
          slug
          price
          variants
          size
          img {
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
  const beds = data.beds.nodes;
  const sofas = data.sofas.nodes;
  const products = new Array().concat(beds, sofas);

  products.forEach((product) => {
    actions.createPage({
      path: `/produkty/${product.slug}`,
      component: path.resolve('./src/templates/product-details.js'),
      context: { ...product },
    });
  });
};
