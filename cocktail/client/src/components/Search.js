import React from 'react'
import MovieList from '../../../../movie_watched_watchlist_context_api/client/src/components/MovieList'
import {useGlobalContext} from "../context"

function Search() {
  const {setSearchTerm,searchTerm,movies,setMovies} =useGlobalContext()
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