import {useState} from 'react';

function SearchBar({onSearch}) {

   const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
      };
    

    return (
        <>
        Search: 
        <input value={query} onChange={handleSearch} type="type" />
        
        </>
    )
}

export {SearchBar};