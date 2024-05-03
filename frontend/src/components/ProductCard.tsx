import React from 'react';
import { IProducts } from '../types';

interface IProductCardProps {
  product: IProducts;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <div
      key={product._id}
      className='w-1/5 h-[200px] border border-black m-1 rounded-md'
    >
      <a href={`/${product._id}`}>
        <figure className='h-2/3 w-full'>
          <img className='size-full rounded-t-md' src={product.image} />
        </figure>
        <div>
          <h3 className='text-center font-lg font-medium'>{product.name}</h3>
          <p className='text-green font-semibold'>$ {product.cost}</p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
