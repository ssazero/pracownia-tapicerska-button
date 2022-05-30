import React from 'react';

interface ICategoryRadio {
  category: string;
  onCategoryChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CategoryRadio: React.FC<ICategoryRadio> = ({
  category,
  onCategoryChange,
}) => (
  <div className='product-category-radio'>
    <span className='product-category-radio__title'>Wybierz kategorię:</span>

    <div className='product-category-radio__option'>
      <label htmlFor='all'>Wszystkie</label>
      <input
        type='radio'
        id='all'
        name='category'
        value='all'
        checked={'all' === category}
        onChange={onCategoryChange}
      />
    </div>

    <div className='product-category-radio__option'>
      <label htmlFor='sofas'>Sofy</label>
      <input
        type='radio'
        id='sofas'
        name='category'
        value='sofa'
        checked={'sofa' === category}
        onChange={onCategoryChange}
      />
    </div>

    <div className='product-category-radio__option'>
      <label htmlFor='beds'>Łóżka</label>
      <input
        type='radio'
        id='beds'
        name='category'
        value='lozko'
        checked={'lozko' === category}
        onChange={onCategoryChange}
      />
    </div>
  </div>
);

export default CategoryRadio;
