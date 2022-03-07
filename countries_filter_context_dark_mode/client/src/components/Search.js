import React from 'react'

function Search() {
  return (
    <div className='search-wrappers'>
      <input type="text" placeholder='Search for a country'/>
      <select>
        <option>Countries</option>
      </select>
    </div>
  )
}

export default Search