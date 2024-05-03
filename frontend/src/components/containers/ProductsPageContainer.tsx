import { useEffect } from 'react';
import { useStore } from '../../zustand/store';
import { API_URL } from '../../constants';
import ProductCard from '../ProductCard';
import Pagination from '../Pagination';

const ProductsPageContainer = () => {
  const products = useStore((state) => state.products);
  const totalProducts = useStore((state) => state.totalProducts);
  const setTotalProducts = useStore((state) => state.setTotalProducts);
  const setTotalPages = useStore((state) => state.setTotalPages);
  const setProducts = useStore((state) => state.setProducts);
  const setActualPage = useStore((state) => state.setActualPage);
  const setPrevPage = useStore((state) => state.setPrevPage);
  const setNextPage = useStore((state) => state.setNextPage);
  useEffect(() => {
    if (!products.length) {
      const getProducts = async () => {
        const fetchedProducts = await fetch(`${API_URL}/products`);
        const json = await fetchedProducts.json();
        setProducts(json.response.products);
        setTotalProducts(json.response.totalProducts);
        setTotalPages(json.response.totalPages);
        setActualPage(1);
        setPrevPage(json.response.prevPage);
        setNextPage(json.response.nextPage);
      };
      getProducts();
    }
  }, [
    products,
    totalProducts,
    setTotalProducts,
    setProducts,
    setTotalPages,
    setActualPage,
    setPrevPage,
    setNextPage,
  ]);

  return (
    <div className='h-5/6 w-full flex flex-col items-center'>
      <div className='h-max w-full border border-black flex justify-center'>
        <p>
          Total products: {totalProducts} Products on page: {products.length}
        </p>
      </div>
      <div className='w-5/6 flex flex-row flex-wrap justify-around'>
        {products?.map((product) => <ProductCard product={product} />)}
      </div>
      <Pagination />
    </div>
  );
};

export default ProductsPageContainer;
