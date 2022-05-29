import React from 'react';

import Seo from '../components/SEO';
import Layout from '../containers/Layout';

const Offer = () => {
  return (
    <Layout>
      <Seo
        title='Oferta'
        description='Nasza oferta: 
 Renowacja: Odnawiamy i zmieniamy obicia mebli codziennego użytku.

 Projekt i realizacja: Produkujemy meble tapicerowane według indywidualnych preferencji klientów - są to produkty jednostkowe - nie ma dwóch takich samych.

 Rekonstrukcja: Wykonujemy rekonstrukcje mebli zabytkowych i stylowych.'
      />
      <article className='offer'>
        <h1 className='section-title'>
          <span>Oferta</span>
        </h1>
        <div className='offer__content'>
          <div className='offer__description'>
            Do każdego zlecenia podchodzimy z zaangażowaniem, a&nbsp;także
            pełnym profesjonalizmem. Nasi Klienci docenili nasz kunszt
            i&nbsp;przy każdej okazji podkreślają, iż polecają nasz zakład
            tapicerski znajomym i&nbsp;rodzinie. Jesteśmy wdzięczni za pokładane
            w nas zaufanie&nbsp;i zapewniamy, że jakość naszych usług stale
            wzrasta, wciąż podwyższamy poprzeczkę i&nbsp;szlifujemy
            umiejętności.
          </div>
          <div className='offer__capabilities'>
            <div className='offer__capabilities-item'>
              <div className='offer__capabilities-item-title'>
                <div className='white-button'>
                  <div className='white-button white-button--1'></div>
                  <div className='white-button white-button--2'></div>
                </div>{' '}
                <h3>Renowacja</h3>
              </div>
              <p className='offer__capabilities-item-content'>
                Odnawiamy i zmieniamy obicia mebli codziennego użytku.
              </p>
            </div>
            <div className='offer__capabilities-item'>
              <div className='offer__capabilities-item-title'>
                <div className='white-button'>
                  <div className='white-button white-button--1'></div>
                  <div className='white-button white-button--2'></div>
                </div>{' '}
                <h3>Projekt i realizacja</h3>
              </div>
              <p className='offer__capabilities-item-content'>
                Produkujemy meble tapicerowane według indywidualnych preferencji
                klientów - są to produkty jednostkowe - nie ma dwóch takich
                samych.
              </p>
            </div>
            <div className='offer__capabilities-item'>
              <div className='offer__capabilities-item-title'>
                <div className='white-button'>
                  <div className='white-button white-button--1'></div>
                  <div className='white-button white-button--2'></div>
                </div>{' '}
                <h3>Rekonstrukcja</h3>
              </div>
              <p className='offer__capabilities-item-content'>
                Wykonujemy rekonstrukcje mebli zabytkowych i&nbsp;stylowych.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};
export default Offer;
