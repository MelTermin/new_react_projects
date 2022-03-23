import React,{useContext} from 'react'
import MovieContext from '../context/MovieProvider'
import MovieCard from './MovieCard'

function WatchedList() {
  const {watchedList}=useContext(MovieContext)
  return (
    <div className='watchlist-wrapper'>
      {watchedList.length> 0 ? (<div>
        {watchedList.map((item,index)=> {
            return(
              <MovieCard key={index} {...item} />         
            )
        })}
      </div>) : (<h2 className="no-movies">No movies in your list! Add some!</h2>) }

  </div>
  )
}

export default WatchedList