import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  

  return (
    <>
        <div className="search-bar"
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
            <input className ="rounded text-black " type="text" placeholder="Rechercher un film" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            
        </div>
        
    </>
  );
};

export default SearchBar;
