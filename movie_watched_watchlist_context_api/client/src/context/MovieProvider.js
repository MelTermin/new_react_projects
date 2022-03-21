import React, { useState, useEffect, createContext} from 'react'

const MovieContext = createContext();

export const MovieProvider = ({children}) => {

  const [searchTerm,setSearchTerm]=useState("");
  const [movies,setMovies]=useState([]);
  const [loading,setLoading]=useState(true);
  const [watchList,setWatchList]=useState([]);
  const [watchedList,setWatchedList]=useState([]);


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
      // saveToLocalStorage(newWatchList)
    
    }

  }

  const addtoWatchedList =(movie) => {
    if(!movie) {
      setWatchedList([])
    } else {
      const newWatchedList= [...watchedList, movie]
      setWatchedList(newWatchedList)
      // saveToLocalStorage(newWatchList)
    
    }

  }

  // const saveToLocalStorage =(items) => {
  //   localStorage.setItem('watch-list', JSON.stringify(items))
  // }

  useEffect(()=>{
    fetchMovies()
    addtoWatchList()
    addtoWatchedList()

  },[searchTerm])

  // useEffect(() => {
	// 	const movieWatchList = JSON.parse(
	// 		localStorage.getItem('watch-list')
	// 	);

	// 	if (movieWatchList) {
	// 		setWatchList(movieWatchList);
	// 	}
	// }, []);


  return (
    <MovieContext.Provider value={{movies,loading,setSearchTerm,searchTerm,fetchMovies,addtoWatchList,watchList,setWatchList,addtoWatchedList,watchedList,setWatchedList}}>

      {children}
    </MovieContext.Provider>

  )
}


export default MovieContext;