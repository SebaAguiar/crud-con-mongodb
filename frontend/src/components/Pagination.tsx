import { API_URL } from '../constants';
import { useStore } from '../zustand/store';

const Pagination = () => {
  const pages = useStore((state) => state.totalPages);
  const setProducts = useStore((state) => state.setProducts);
  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

  const handlePaginationClick = async (number: number) => {
    const fetchedProducts = await fetch(`${API_URL}/products?page=${number}`);
    const json = await fetchedProducts.json();
    setProducts(json.response.products);
  };

  return (
    <div className='w-3/6 h-14 flex justify-center'>
      {pageNumbers.map((number) => (
        <button
          className='size-4 m-2'
          onClick={() => handlePaginationClick(number)}
          key={number}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
