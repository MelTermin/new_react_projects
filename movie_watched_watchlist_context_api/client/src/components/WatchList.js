import React,{useContext} from 'react'
import MovieContext from '../context/MovieProvider'

function WatchList() {
  const {watchList}=useContext(MovieContext)
  return (
    <div>
      {watchList.map((item,index)=> {
      return(
        <div key={index}>
           <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={`${item.title} Poster`}/>
        </div>
      )
      })}
    </div>
  )
}

export default WatchList