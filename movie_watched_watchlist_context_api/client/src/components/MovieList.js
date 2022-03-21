import React,{useContext,useState} from 'react'
import MovieContext from '../context/MovieProvider'

function MovieList(movie) {

  const {addtoWatchList,watchList,addtoWatchedList,watchedList}=useContext(MovieContext)

  //if the movie that I added on the watch listarray is there
  let storedMovie= watchList.find(element => element.id === movie.id)

  let storedWatchedMovie=watchedList.find(element =>element.id === movie.id)

  //I will disable the button
  const watchListDisabled= storedMovie ? true : false
  const watchedDisabled = storedWatchedMovie ? true : false;
  
   
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
          <button className='btn' disabled={watchListDisabled}   onClick={() => addtoWatchList(movie)}>Add To Watch List</button>
          <button className='btn' disabled={watchedDisabled} onClick={()=>addtoWatchedList(movie)}>Add To Watched List</button>
        </div>

      </div>

    </div>
  )
}

export default MovieList