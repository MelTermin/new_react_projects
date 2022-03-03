import React from 'react'
import {useGlobalContext} from "../context"

function Search() {
  const {setSearchTerm,searchTerm} =useGlobalContext()
  // const searchValue=React.useRef("")

  const searchCocktail= (e) => {
    setSearchTerm(e.target.value)
  }
  const handleSubmit= (e) => {
    e.preventDefault() 

  }
  
  return (
    <div className='search-container'>
      <h3>Search Your Favourite Cocktail</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search your cocktail' value={searchTerm} onChange={searchCocktail}/>
      </form>

    </div>
  )
}

export default Search