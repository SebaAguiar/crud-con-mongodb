import React, { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
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
