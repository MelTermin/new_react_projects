import React from 'react'
import {useGlobalContext} from "../context"

function Search() {
  const {setSearchTerm,searchTerm} =useGlobalContext()
  // const searchValue=React.useRef("")

  const searchCocktail= (e) => {
    setSearchTerm(e.target.value)
  }
  
  return (
    <div className='search-container'>
      <h3>Search Your Favourite Cocktail</h3>
      <form>
        <input type="text" placeholder='Search your cocktail' value={searchTerm} onChange={searchCocktail}/>
      </form>

    </div>
  )
}

export default Search