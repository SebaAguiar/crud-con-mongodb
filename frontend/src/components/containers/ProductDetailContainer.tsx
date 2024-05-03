import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../constants';
import { IProducts } from '../../types';

const ProductDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProducts | null>(null);
  useEffect(() => {
    if (!product) {
      const getProductById = async () => {
        const fetchedProduct = await fetch(`${API_URL}/products/${id}`);
        const json = await fetchedProduct.json();
        setProduct(json.response);
      };
      getProductById();
    }
  }, [product, id]);

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='h-[300px] border border-black  rounded-md flex flex-row lg:w-[1000px]'>
        <figure>
          <img
            className='h-[300px] w-[400px]'
            src={product?.image}
            alt={product?.name}
          />
        </figure>
        <div className='w-full h-full flex flex-col'>
          <div className='w-full h-5/6'>
            <h1 className='text-xl font-semibold'>{product?.name}</h1>
            <p className='m-4'>{product?.description}</p>
          </div>
          <div className='h-1/6 flex justify-end items-center'>
            <p className='text-lg font-bold text-center text-green m-4'>
              $ {product?.cost}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailContainer;
