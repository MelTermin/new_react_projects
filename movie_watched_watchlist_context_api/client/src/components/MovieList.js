import React,{useContext} from 'react'
import MovieContext from '../context/MovieProvider'

function MovieList(movie) {

  const {addtoWatchList}=useContext(MovieContext)
   
  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.poster_path ? (
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>):
        (<div className="filler-poster" />)}
      </div>
      <div className='info'>
        <div className='header'>
          <h3>{movie.title}</h3>
          <h4>{movie.release_date}</h4>
        </div>
        <div className='controls'>
          <button className='btn' onClick={() => addtoWatchList(movie)}>Add To Watch List</button>
          <button className='btn'>Add To Watched List</button>
        </div>

      </div>

    </div>
  )
}

export default MovieList