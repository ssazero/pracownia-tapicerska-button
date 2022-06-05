import React from 'react';
import Layout from '../containers/Layout';
import Seo from '../components/SEO';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Map from '../components/Map';

const ProductDetails = ({ pageContext }) => {
  console.log(pageContext);

  return (
    <Layout>
      <Seo title={pageContext.title} description={pageContext.description} />
      <h1 className='section-title'>
        <span>{pageContext.title}</span>
      </h1>
      <article className='product-details'>
        <div className='product-details__image-container'>
          <Img
            className='product-details__image'
            imgStyle={{ objectFit: 'contain' }}
            fluid={pageContext.img.childImageSharp.fluid}
            alt={pageContext.title}
          />
          <div>FIRST</div>
          <div>SECOND</div>
        </div>
        <div className='product-details__content'>
          <h3 className='product-details__title'>{pageContext.title}</h3>
          <div className='product-details__details'>
            <p className='product-details__description'>
              <span className='gray-label'>{pageContext.description}</span>
            </p>
            <p className='product-details__size'>
              <span className='gray-label'>Wymiary: </span>
              {pageContext.size}
            </p>
            {pageContext.variants.length > 0 && (
              <p className='product-details__variants'>
                <span className='gray-label'>Inne możliwe materiały: </span>
                {pageContext.variants.map((variant, index) => (
                  <>
                    <span>{`${variant}${pageContext.variants.length - 1 !== index ? ', ' : ' '}`}</span>
                  </>
                ))}
              </p>
            )}
            <p className='product-details__price'>
              <span className='gray-label'>Cena: </span>
              {pageContext.price}
            </p>
            <p className='product-details__price'>
              <span className='gray-label'>Link do allegro: </span>
              <Link>KLIKNIJ TUTAJ</Link>
            </p>
          </div>
          <div className='product-details__contact'>
            <p>Możesz również zakupić przedmiot za pomocą drogi mailowej.</p>
            <p>
              E-Mail: <span className='contact-email'>kontakt@pracownia-button.pl</span>
            </p>
            <p>
              Przekaż mi w e-mailu produkt, który chcesz zakupić, a ja wyślę Ci dane do przelewu, a następnie poślę
              produkt w Twoją stronę!
            </p>
            <p>Istnieje również opcja aby odebrać produkt osobiście pod adresem wskazanym na mapie poniżej.</p>
            <div className='contact-map'>
              <span>Lokalizacja pracowni</span>
              <Map />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ProductDetails;
