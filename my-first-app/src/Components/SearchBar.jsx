import {useState} from 'react';

function SearchBar({onSearch}) {

   const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
      };

     
    

    return (
      <div className="searchbar-container">
        <label className="search-input"> Search:</label>
        <input value={query} onChange={handleSearch} type="text" 
        
        />
        </div>
      );
    }

export {SearchBar};