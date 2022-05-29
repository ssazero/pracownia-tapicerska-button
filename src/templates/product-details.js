import React from 'react';
import Layout from '../containers/layout';
import SEO from '../components/seo';

const ProjectDetails = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <Layout>
      <SEO
        title='Partnerzy'
        description='Nasi partnerzy: Projekt W, Kameleoon'
      />
      <div>{pageContext.title}</div>
    </Layout>
  );
};

export default ProjectDetails;
