import React,{useContext} from 'react'
import MovieContext from '../context/MovieProvider'

function WatchList() {
  const {watchList,removeWatchList}=useContext(MovieContext)


  return (
    <div className='movie-grid'>
      <h1 className="heading">My Watchlist</h1>
      {watchList.length> 0 ? (<div>
        {watchList.map((item,index)=> {
            return(
            <div key={index} className='movie-card'>
              <div className="overlay"></div>
              
              <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={`${item.title} Poster`}/>
              <button className="ctrl-btn" onClick={()=>removeWatchList(item.id)}>
                Delete
              </button>
            </div>
            )
        })}
      </div>) : (<h2 className="no-movies">No movies in your list! Add some!</h2>) }
    </div>
  )
}

export default WatchList