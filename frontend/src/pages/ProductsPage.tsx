import React from 'react';
import ProductsPageContainer from '../components/containers/ProductsPageContainer';
import ProductsLayout from '../layouts/ProductsLayout';

const ProductsPage = () => {
  return (
    <ProductsLayout>
      <ProductsPageContainer />
    </ProductsLayout>
  );
};

export default ProductsPage;
