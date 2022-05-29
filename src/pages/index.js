import React from 'react';

import Layout from '../containers/Layout';
import Seo from '../components/SEO';
import Slideshow from '../components/Slideshow';

import img0 from '../images/realisations/p6.jpg';
import img1 from '../images/realisations/p28.jpg';
import img2 from '../images/realisations/p13.jpg';
import img3 from '../images/realisations/p12.jpg';
import img4 from '../images/realisations/p18.jpg';

const IndexPage = () => {
  const images = [
    {
      src: img0,
    },
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
    {
      src: img4,
    },
  ];
  return (
    <Layout>
      <Seo
        title='Home'
        description='Button - Autorska pracownia tapicerska - Grzegorz Smagło. Do każdego zlecenia podchodzimy z zaangażowaniem, a także pełnym profesjonalizmem. Nasi Klienci docenili nasz kunszt i przy każdej okazji podkreślają, iż polecają nasz zakład tapicerski znajomym i rodzinie. Jesteśmy wdzięczni za pokładane w nas zaufanie i zapewniamy, że jakość naszych usług stale wzrasta, wciąż podwyższamy poprzeczkę i szlifujemy umiejętności.'
      />
      <Slideshow numbers={false} images={images} />
    </Layout>
  );
};

export default IndexPage;
