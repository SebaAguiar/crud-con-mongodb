import { useEffect } from 'react';
import { useStore } from '../../zustand/store';
import { API_URL } from '../../constants';
import ProductCard from '../ProductCard';

const ProductsPageContainer = () => {
  const products = useStore((state) => state.products);
  const setProducts = useStore((state) => state.setProducts);
  useEffect(() => {
    if (!products.length) {
      const getProducts = async () => {
        const fetchedProducts = await fetch(`${API_URL}/products`);
        const json = await fetchedProducts.json();
        setProducts(json.response.products);
      };
      getProducts();
    }
  }, [products, setProducts]);

  return (
    <>
      <div className='h-5/6 w-full flex flex-row flex-wrap justify-around'>
        {products?.map((product) => <ProductCard product={product} />)}
      </div>
    </>
  );
};

export default ProductsPageContainer;
