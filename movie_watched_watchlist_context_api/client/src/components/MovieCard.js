import React from 'react'

function MovieCard(item) {
  return (
    <div>
        <div className='overlay'>
             <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={`${item.title} Poster`}/>

              <button className="ctrl-btn">
               <i className="fa-fw fa fa-times"></i>
              </button>
        </div>
    </div>
  )
}

export default MovieCard