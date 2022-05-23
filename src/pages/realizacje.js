import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

import SEO from '../components/seo';
import Layout from '../containers/layout';
import GalleryItem from '../components/galleryItem';

const options = {
  buttons: {
    backgroundColor: '#14141477',
    iconColor: '#f1eff3',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: true,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: true,
  },
  settings: {
    overlayColor: '#151516dd',
    transitionSpeed: 1000,
    transitionTimingFunction: 'linear',
    hideControlsAfter: false,
  },
  thumbnails: {
    thumbnailsSize: ['120px', '120px'],
    thumbnailsPosition: 'bottom',
    thumbnailsGap: '0 0 0 0',
    thumbnailsOpacity: 0.3,
    thumbnailsContainerBackgroundColor: '#14141477',
    thumbnailsContainerPadding: '0 5px',
  },
};

const Realisations = () => {
  const images = [
    {
      src: '/realisations/p1.jpg',
      thumbnail: '/realisations/p1_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p2.jpg',
      thumbnail: '/realisations/p2_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p3.jpg',
      thumbnail: '/realisations/p3_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p4.jpg',
      thumbnail: '/realisations/p4_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p5.jpg',
      thumbnail: '/realisations/p5_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p6.jpg',
      thumbnail: '/realisations/p6_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p7.jpg',
      thumbnail: '/realisations/p7_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p8.jpg',
      thumbnail: '/realisations/p8_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p9.jpg',
      thumbnail: '/realisations/p9_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p10.jpg',
      thumbnail: '/realisations/p10_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p11.jpg',
      thumbnail: '/realisations/p11_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p12.jpg',
      thumbnail: '/realisations/p12_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p13.jpg',
      thumbnail: '/realisations/p13_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p14.jpg',
      thumbnail: '/realisations/p14_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p15.jpg',
      thumbnail: '/realisations/p15_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p16.jpg',
      thumbnail: '/realisations/p16_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p17.jpg',
      thumbnail: '/realisations/p17_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p18.jpg',
      thumbnail: '/realisations/p18_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p19.jpg',
      thumbnail: '/realisations/p19_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p20.jpg',
      thumbnail: '/realisations/p20_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p21.jpg',
      thumbnail: '/realisations/p21_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p22.jpg',
      thumbnail: '/realisations/p22_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p23.jpg',
      thumbnail: '/realisations/p23_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p24.jpg',
      thumbnail: '/realisations/p24_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p25.jpg',
      thumbnail: '/realisations/p25_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p26.jpg',
      thumbnail: '/realisations/p26_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p27.jpg',
      thumbnail: '/realisations/p27_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p28.jpg',
      thumbnail: '/realisations/p28_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p29.jpg',
      thumbnail: '/realisations/p29_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p30.jpg',
      thumbnail: '/realisations/p30_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
    {
      src: '/realisations/p31.jpg',
      thumbnail: '/realisations/p31_tn.jpg',
      caption:
        'Meble tapicerowane wg indywidualnego projektu -  Projekt W Pracownia Architektury Wnętrz - www.projektw.pl',
    },
  ];

  const galleryItems = images.map((image, index) => (
    <GalleryItem
      key={'Realizacja ' + index}
      src={image.src}
      thumbnail={image.thumbnail}
      caption={image.caption}
    />
  ));

  return (
    <Layout>
      <SEO title='Realizacje' />
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
