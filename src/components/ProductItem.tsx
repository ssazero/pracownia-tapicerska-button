import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { Link } from 'gatsby';

export interface ProductItem {
  title: string;
  description: string;
  img: FluidObject | FluidObject[];
  slug: string;
  price: string;
  variants: number;
}

const ProductItem: React.FC<ProductItem> = ({
  title,
  description,
  img,
  slug,
  price,
  variants,
}) => (
  <div className='product-item'>
    <Link to={`/produkty/${slug}`}>
      <div className='product-item__image-container'>
        <Img className='product-item__image' fluid={img} alt={title} />
      </div>
      <h3 className='product-item__title'>{title}</h3>
    </Link>
    <div className='product-item__content'>
      <p className='product-item__description'>{description}</p>
      <div className='product-item__footer'>
        <span className='product-item__variants'>
          {variants ? `Inne warianty: ${variants}` : 'Brak innych wariantów.'}
        </span>
        <span className='product-item__price'>{price}</span>
      </div>
    </div>
  </div>
);

export default ProductItem;
