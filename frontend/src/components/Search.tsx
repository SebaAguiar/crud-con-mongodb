import React, { useState } from 'react';
import { useStore } from '../zustand/store';
import { API_URL } from '../constants';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const filterProductsByName = useStore((state) => state.filterProductsByName);
  const [search, setSearch] = useState('');
  const navigate = useNavigate(); // Añade esta línea
  const setTotalPages = useStore((state) => state.setTotalPages);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const fetchedProducts = await fetch(`${API_URL}/products?name=${search}`);
    const json = await fetchedProducts.json();
    if (json.response.products.length) {
      filterProductsByName(json.response.products);
      setTotalPages(json.response.totalPages);
    } else {
      navigate('/not-found');
    }
  };

  return (
    <div>
      <input
        type='text'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button className='bg-gray' type='button' onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default Search;
