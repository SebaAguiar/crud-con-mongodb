import React from 'react';
import NavBar from '../components/containers/NavBar';

interface IProductsLayoutProps {
  children: React.ReactNode;
}

const ProductsLayout: React.FC<IProductsLayoutProps> = ({ children }) => {
  return (
    <>
      <main className='h-full w-full flex flex-col'>
        <NavBar />
        {children}
      </main>
    </>
  );
};

export default ProductsLayout;
