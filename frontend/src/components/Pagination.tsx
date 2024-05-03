import { API_URL } from '../constants';
import { useStore } from '../zustand/store';

const Pagination = () => {
  const pages = useStore((state) => state.totalPages);
  const actualPage = useStore((state) => state.actualPage);
  const setActualPage = useStore((state) => state.setActualPage);
  const setProducts = useStore((state) => state.setProducts);
  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

  const handlePaginationClick = async (number: number) => {
    const fetchedProducts = await fetch(`${API_URL}/products?page=${number}`);
    const json = await fetchedProducts.json();
    setProducts(json.response.products);
    setActualPage(number);
  };

  return (
    <div className='w-3/6 h-14 flex justify-center'>
      {pageNumbers.map((number) => (
        <button
          className={`size-4 text-cente m-2 ${number === actualPage ? 'font-bold text-green' : ''}`}
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
