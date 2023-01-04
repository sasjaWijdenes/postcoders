import { useState } from "react";

const SearchBar = ({ setSearchValue }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      setSearchValue(searchTerm)
    };

    return (
        <form onSubmit={handleSubmit}>
      <label>
        Search:
        <input type="text" value={searchTerm} onChange={handleChange} />
      </label>
      <button type="submit">Search</button>
    </form>
    )
}

export default SearchBar