import React, { useState } from 'react';
import { useStore } from '../zustand/store';
import { API_URL } from '../constants';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const filter = useStore((state) => state.filter);
  const [search, setSearch] = useState('');
  const navigate = useNavigate(); // Añade esta línea

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(search);
    const fetchedProducts = await fetch(`${API_URL}/products?name=${search}`);
    const json = await fetchedProducts.json();
    console.log(json);
    if (json.response.products.length) {
      filter(json.response.products);
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
