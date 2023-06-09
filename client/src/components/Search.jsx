import React from 'react'

const Search = ({gems, searchInput, setSearchInput}) => {

  const handleSearch = (event) => {
      setSearchInput(event.target.value);
  }

  return (
    <div>
      <input type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearch}>
      </input>
    </div>

  )


}

export default Search