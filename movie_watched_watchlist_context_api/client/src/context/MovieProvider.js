import React, { useState, useEffect, createContext } from 'react'

const MovieContext = createContext();

export const MovieProvider = ({children}) => {
  const [searchTerm,setSearchTerm]=useState("harry potter")
  const[movies,setMovies]=useState([])

  const fetchMovies= async() => {
    const response= await fetch( `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${searchTerm}`)
    const data= await response.json()
    console.log("data",data)
  }

  useEffect(()=>{
    fetchMovies()

  },[searchTerm])


  return (
    <MovieContext.Provider value={{}}>

      {children}
    </MovieContext.Provider>

  )
}


export default MovieContext;