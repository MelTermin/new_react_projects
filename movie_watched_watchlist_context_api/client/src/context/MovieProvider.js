import React, { useState, useEffect, createContext} from 'react'

const MovieContext = createContext();

export const MovieProvider = ({children}) => {

  const [searchTerm,setSearchTerm]=useState("");
  const [movies,setMovies]=useState([]);
  const [loading,setLoading]=useState(true);
  const [watchList,setWatchList]=useState([]);

  const fetchMovies= async() => {
    
    setLoading(true)
    try {
      if(searchTerm ==="") {
        setMovies([])
      } else {     
        const response= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e6f88449aa54db16f9eb5ce5387c49cc&language=en-US&page=1&include_adult=false&query=${searchTerm}`)
        const data= await response.json()
        console.log(data.results)
        setMovies(data.results)
        setLoading(false)


      }
 

    } catch(error) {
      console.log(error)
    }

  }

  const addtoWatchList= (movie) => {
    if(!movie) {
      setWatchList([])
    } else {
      const newWatchList= [...watchList, movie]
      setWatchList(newWatchList)
    }

  }

  useEffect(()=>{
    fetchMovies()
    addtoWatchList()

  },[searchTerm])


  return (
    <MovieContext.Provider value={{movies,loading,setSearchTerm,searchTerm,fetchMovies,addtoWatchList,watchList,setWatchList}}>

      {children}
    </MovieContext.Provider>

  )
}


export default MovieContext;