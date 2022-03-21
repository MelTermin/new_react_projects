import React, { useContext } from 'react'
import MovieContext from '../context/MovieProvider'
import MovieList from './MovieList'

function Search() {
  const {searchTerm, setSearchTerm,fetchMovies,movies}=useContext(MovieContext)

  const searchHandler= ()=> { 
    fetchMovies()
  }

  
   return (
    <div className='search-wrapper'>
      <form onSubmit={searchHandler}>
        <input type="text" placeholder='Please type a movie' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>  
      </form>
      <div className='results'>
        {movies.length>1 &&
          movies.map((movie,index)=> {
            return(
              <MovieList key={index} {...movie}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Search