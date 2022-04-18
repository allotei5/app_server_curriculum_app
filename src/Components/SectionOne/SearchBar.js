import React, { useState, useEffect } from 'react';

const SearchBar = ({ keyword, setKeyword }) => {
  const [search, setSearch] = useState('');
  useEffect(() => {
    //call fetch function
  }, [search]);

  const BarStyling = {
    width: '40rem',
    background: '#fff',
    border: 'none',
    padding: '1rem',
    borderRadius: '10px',
    marginBottom: '20px'
    
  };

  return (
    <input
      style={BarStyling}
      key='random1'
      value={keyword}
      placeholder={'search for Courses...'}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
