import React,{useContext} from 'react'
import MovieContext from '../context/MovieProvider'

function WatchList() {
  const {watchList}=useContext(MovieContext)
  return (
    <div>
      {watchList.map((item)=> {
      return(
        <div>
           <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={`${item.title} Poster`}/>
        </div>
      )
      })}
    </div>
  )
}

export default WatchList