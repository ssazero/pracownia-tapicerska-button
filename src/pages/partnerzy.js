import React from 'react';

import SEO from '../components/seo';
import Layout from '../containers/layout';
import Partner from '../components/partner';

const Partners = () => {
  return (
    <Layout>
      <SEO
        title='Partnerzy'
        description='Nasi partnerzy: Projekt W, Kameleoon'
      />
      <article className='partners'>
        <h1 className='section-title'>
          <span>Partnerzy</span>
        </h1>
        <div className='partners__content'>
          <Partner
            link='http://projektw.pl/'
            src='/partners/projekt-w.png'
            alt='Projekt W'
          />
          <Partner
            link='https://www.toptextil.pl/'
            src='/partners/toptextil.png'
            alt='Toptextil'
            style={{ padding: '1.7rem' }}
          />
          <Partner
            link='https://www.fargotex.pl/'
            src='/partners/fargotex.png'
            alt='Fargotex'
            style={{ padding: '2.6rem' }}
          />
          <Partner
            link='https://kameleon.pro/'
            src='/partners/kameleonpro.png'
            alt='Kameleon'
          />
          <Partner
            link='https://eldo.pl/'
            src='/partners/eldo.png'
            alt='eldo'
            style={{ padding: '1.7rem' }}
          />
        </div>
      </article>
    </Layout>
  );
};
export default Partners;
