import React, { useState } from 'react';

const GifSearch = ({handleSubmit}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const input = e.target.value
    console.log(input)
    setSearchTerm(input);
    
  };
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(searchTerm);
  };

  return (
    <form  onSubmit={handleFormSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default GifSearch;
