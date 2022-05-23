import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Slideshow = (props) => {
  const [slides] = useState(props.images || []);
  const [slideIndex, setSlideIndex] = useState(0);
  const [buttonsBlocked, setButtonsBlocked] = useState(false);
  const [coordX, setCoordX] = useState(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      slideChangeHandler(slideIndex + 1);
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  });

  useEffect(() => {
    setButtonsBlocked(true);
    const blockButtons = setTimeout(() => {
      setButtonsBlocked(false);
    }, 600);
    return () => {
      clearInterval(blockButtons);
    };
  }, [slideIndex]);

  const slideChangeHandler = (slideNumber) => {
    if (!buttonsBlocked) {
      if (slideNumber >= slides.length) {
        setSlideIndex(0);
      } else if (slideNumber < 0) {
        setSlideIndex(slides.length - 1);
      } else {
        setSlideIndex(slideNumber);
      }
    }
  };

  const touchStartHandler = (touchStartEvent) => {
    setCoordX(touchStartEvent.targetTouches[0].clientX);
  };

  const touchEndHandler = (touchEndEvent) => {
    if (coordX - touchEndEvent.changedTouches[0].clientX > 50) {
      slideChangeHandler(slideIndex + 1);
    } else if (coordX - touchEndEvent.changedTouches[0].clientX < -50) {
      slideChangeHandler(slideIndex - 1);
    }
  };

  const slideshowDots = slides.map((slide, index) => {
    let classes = ['slideshow__dots-item'];
    if (slideIndex === index) {
      classes.push('slideshow__dots-item--active');
    }
    return (
      <div
        key={'slideshow-dot-' + index}
        className={classes.join(' ')}
        onClick={() => slideChangeHandler(index)}
      >
        <div className='slideshow__dots-item-hole slideshow__dots-item-hole--1'></div>
        <div className='slideshow__dots-item-hole slideshow__dots-item-hole--2'></div>
      </div>
    );
  });

  return (
    <TransitionGroup className='slideshow'>
      <img className='slideshow__logo' src='/logo-white.png' alt='Logo' />
      {props.numbers && (
        <div className='slideshow__number'>
          {slideIndex + 1} / {slides.length}
        </div>
      )}
      <div className='slideshow__dots'>{slideshowDots}</div>
      <div
        className='slideshow__button slideshow__button--previous'
        onClick={() => {
          slideChangeHandler(slideIndex - 1);
        }}
        onTouchStart={(touchStartEvent) => touchStartHandler(touchStartEvent)}
        onTouchEnd={(touchEndEvent) => touchEndHandler(touchEndEvent)}
      >
        <div className='slideshow__arrow slideshow__arrow--previous'></div>
      </div>
      <div
        className='slideshow__button slideshow__button--next'
        onClick={() => {
          slideChangeHandler(slideIndex + 1);
        }}
        onTouchStart={(touchStartEvent) => touchStartHandler(touchStartEvent)}
        onTouchEnd={(touchEndEvent) => touchEndHandler(touchEndEvent)}
      >
        <div className='slideshow__arrow slideshow__arrow--next'></div>
      </div>
      <CSSTransition
        key={'slide-' + slideIndex}
        timeout={2000}
        classNames='slide'
        unmountOnExit
      >
        <div className='slideshow__slide '>
          <img
            className='slideshow__slide-image'
            src={slides[slideIndex].src}
            alt='Slide image'
          />
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Slideshow;
