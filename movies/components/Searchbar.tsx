import React, { useState } from 'react';

const SearchBar = ({searchText, setSearchText}) => {

  return (
    <>
        <div className="search-bar text-center my-5">
            <input className ="rounded text-black py-2 px-2 w-60" type="text" placeholder="Rechercher un film" value={searchText} onChange={(e) => setSearchText(e.target.value)} />   
        </div>
        
    </>
  );
};

export default SearchBar;