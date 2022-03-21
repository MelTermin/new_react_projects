import React,{useContext} from 'react'
import MovieContext from '../context/MovieProvider'

function WatchedList() {
  const {watchedList}=useContext(MovieContext)
  return (
    <div>
      {watchedList.length> 0 ? (<div>
        {watchedList.map((item,index)=> {
            return(
            <div key={index} className='overlay'>
              <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={`${item.title} Poster`}/>

              <button className="ctrl-btn">
                <i className="fa-fw fa fa-times"></i>
              </button>
        
            </div>
            
            )
        })}
      </div>) : (<h2 className="no-movies">No movies in your list! Add some!</h2>) }

  </div>
  )
}

export default WatchedList