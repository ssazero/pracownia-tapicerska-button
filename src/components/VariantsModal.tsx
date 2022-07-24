import React, { useEffect, useRef, FC } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import Variant from './Variant';

interface Props {
  onClose: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => void;
}

const variants = [
  {
    src: '/variants/brazowy.jpg',
    title: 'Brąz',
  },
  {
    src: '/variants/pomaranczowy.jpg',
    title: 'Pomarańcz',
  },
  {
    src: '/variants/bezowy.jpg',
    title: 'Beż',
  },
  {
    src: '/variants/rozowy.jpg',
    title: 'Róż',
  },
];

const VariantsModal: FC<Props> = ({ onClose }) => {
  const OKButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    OKButtonRef?.current?.focus();
  });

  return (
    <>
      <Backdrop show={true} onClick={onClose} />
      <div className='variants-modal'>
        <h1 className='variants-modal__title'>Możliwe wykończenia</h1>
        <div className='variants-modal__content'>
          {variants.map(({ src, title }) => (
            <Variant src={src} title={title} />
          ))}
        </div>
        <div className='variants-modal__actions'>
          <button onClick={onClose} className='simple-button' ref={OKButtonRef}>
            Zamknij
          </button>
        </div>
      </div>
    </>
  );
};

export default VariantsModal;
