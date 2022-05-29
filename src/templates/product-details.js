import React from 'react';
import Layout from '../containers/Layout';
import Seo from '../components/SEO';

const ProjectDetails = ({ pageContext }) => {
  console.log(pageContext);

  return (
    <Layout>
      <Seo
        title='Partnerzy'
        description='Nasi partnerzy: Projekt W, Kameleoon'
      />
      <div>{pageContext.title}</div>
    </Layout>
  );
};

export default ProjectDetails;
