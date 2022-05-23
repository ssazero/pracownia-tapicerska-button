import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ title, description }) {
  const { site } = useStaticQuery(query);

  const { defaultTitle, titleTemplate, defaultDescription } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}
      {seo.image && <meta property='og:image' content={seo.image} />}
      <meta name='twitter:card' content='summary_large_image' />
      {seo.title && <meta name='twitter:title' content={seo.title} />}
      {seo.description && (
        <meta name='twitter:description' content={seo.description} />
      )}
      {seo.image && <meta name='twitter:image' content={seo.image} />}
      <link
        href='https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;200;300;400;500;600;700&display=swap'
        rel='stylesheet'
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `pl`,
  title: `Button - Autorska Pracownia Tapicerska`,
  meta: [
    {
      name: `author`,
      content: `Samuel Kędziora <samukedo@gmail.com>`,
    },
  ],
  description: `Button - Autorska pracownia tapicerska - Grzegorz Smagło. Do każdego zlecenia podchodzimy z zaangażowaniem, a także pełnym profesjonalizmem. Nasi Klienci docenili nasz kunszt i przy każdej okazji podkreślają, iż polecają nasz zakład tapicerski znajomym i rodzinie. Jesteśmy wdzięczni za pokładane w nas zaufanie i zapewniamy, że jakość naszych usług stale wzrasta, wciąż podwyższamy poprzeczkę i szlifujemy umiejętności.`,
  image: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
      }
    }
  }
`;
