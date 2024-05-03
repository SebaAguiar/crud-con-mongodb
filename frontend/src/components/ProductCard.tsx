import React from 'react';
import { IProducts } from '../types';

interface IProductCardProps {
  product: IProducts;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <div key={product._id} className='w-1/5 h-max border border-black m-1'>
      <a href={`/${product._id}`}>
        <figure>
          <img src={product.image} />
        </figure>
        <div>
          <h3>{product.name}</h3>
          <p>{product.cost}</p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
