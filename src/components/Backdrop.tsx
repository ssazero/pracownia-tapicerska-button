import React from 'react';
import ReactDOM from 'react-dom';

interface IBackdrop {
  show: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Backdrop = ({ show, onClick }: IBackdrop) => (show ? <div className='backdrop' onClick={onClick} /> : null);

export default Backdrop;
