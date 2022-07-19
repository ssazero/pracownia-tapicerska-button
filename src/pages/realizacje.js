import React from 'react';
import { graphql } from 'gatsby';
import { SRLWrapper } from 'simple-react-lightbox';

import Seo from '../components/SEO';
import Layout from '../containers/Layout';
import GalleryItem from '../components/GalleryItem';
import { compareNames } from '../utils/stringUtils';
import { options } from '../utils/simpleReactLightbox';

const Realisations = ({ data }) => {
  const numberOfRealisations = data.realisations.nodes.length;

  const thumbnailSources = data.realisations.nodes
    .map((el) => el.childImageSharp.fluid)
    .sort((a, b) => compareNames(a.originalName, b.originalName));

  const imageSources = data.realisations.nodes
    .sort((a, b) => compareNames(a.childImageSharp.fluid.originalName, b.childImageSharp.fluid.originalName))
    .map((el) => el.childImageSharp.fluid.originalImg);

  const galleryItems = [...Array(numberOfRealisations)].map((_, i) => (
    <GalleryItem
      key={'Realizacja ' + i}
      src={imageSources[i]}
      thumbnail={thumbnailSources[i]}
      caption={
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl'
      }
    />
  ));

  return (
    <Layout compress>
      <Seo title='Realizacje' />
      <h1 className='section-title'>
        <span>Galeria z realizacji</span>
      </h1>
      <SRLWrapper options={options}>
        <div className='gallery'>{galleryItems}</div>
      </SRLWrapper>
    </Layout>
  );
};

export default Realisations;

export const query = graphql`
  query AllRealisations {
    realisations: allFile(filter: { relativePath: { regex: "/realisations/" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            originalName
            originalImg
          }
        }
      }
    }
  }
`;
