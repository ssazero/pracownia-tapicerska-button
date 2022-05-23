import React from 'react';

import Layout from '../containers/layout';
import SEO from '../components/seo';
import Slideshow from '../components/Slideshow';

const IndexPage = () => {
  const images = [
    {
      src: '/realisations/p6.jpg',
    },
    {
      src: '/realisations/p12.jpg',
    },
    {
      src: '/realisations/p28.jpg',
    },
    {
      src: '/images/realisations/p13.jpg',
    },
    {
      src: '/images/realisations/p18.jpg',
    },
  ];
  return (
    <Layout>
      <SEO
        title='Home'
        description='Button - Autorska pracownia tapicerska - Grzegorz Smagło. Do każdego zlecenia podchodzimy z zaangażowaniem, a także pełnym profesjonalizmem. Nasi Klienci docenili nasz kunszt i przy każdej okazji podkreślają, iż polecają nasz zakład tapicerski znajomym i rodzinie. Jesteśmy wdzięczni za pokładane w nas zaufanie i zapewniamy, że jakość naszych usług stale wzrasta, wciąż podwyższamy poprzeczkę i szlifujemy umiejętności.'
      />
      <Slideshow numbers={false} images={images} />
    </Layout>
  );
};

export default IndexPage;
