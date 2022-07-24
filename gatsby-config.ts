import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Button meble - Pracownia Tapicerska`,
    titleTemplate: '%s - Button meble',
    description: `Button meble - Pracownia tapicerska - Grzegorz Smagło. Do każdego zlecenia podchodzimy z zaangażowaniem, a także pełnym profesjonalizmem. Nasi Klienci docenili nasz kunszt i przy każdej okazji podkreślają, iż polecają nasz zakład tapicerski znajomym i rodzinie. Jesteśmy wdzięczni za pokładane w nas zaufanie i zapewniamy, że jakość naszych usług stale wzrasta, wciąż podwyższamy poprzeczkę i szlifujemy umiejętności.`,
    author: `Samuel Kędziora <samukedo@gmail.com>`,
    image: '/button-meble-logo.png',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `pracownia-tapicerska-button`,
        short_name: `Button`,
        start_url: `/`,
        background_color: `#0f0f0f`,
        theme_color: `#0f0f0f`,
        display: `minimal-ui`,
        icon: `./static/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poiret one`],
        display: 'swap',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'products',
        path: `${__dirname}/src/data/products`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
  ],
};

export default config;
