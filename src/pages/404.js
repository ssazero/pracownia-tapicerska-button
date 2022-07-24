import React from 'react';

import Layout from '../containers/Layout';
import Seo from '../components/SEO';

const NotFoundPage = () => (
  <Layout compress>
    <Seo
      title='404 - Nie znaleziono'
      description='Niestety podstrona, na którą próbowałeś/aś się dostać nie istnieje.'
    />
    <h1>Nie znaleziono podstrony</h1>
    <p>Niestety podstrona, na którą próbowałeś/aś się dostać nie istnieje.</p>
  </Layout>
);

export default NotFoundPage;
