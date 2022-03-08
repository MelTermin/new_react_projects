import React, { useState, useEffect, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

const CountriesContext = createContext()

export const CountriesProvider = ({children}) => {
  const [countries, setCountries]=useState([]);
  const [loading, setLoading]=useState(true);
  const [searchTerm, setSearchTerm]=useState('')
 



  const fetchCountries = async() => {
    setLoading(true);

    try {
      const response= await fetch('https://restcountries.com/v2/all')
      const data= await response.json()
      console.log("countries", data)

      //lets deconstruct the array

      const {details}=data
     
      if(data) {
        const newCountries= data.map((item)=> {
          const {
            name,
            flag,
            region,
            population,
            capital, 
            subregion,
            currencies,
            languages,
            borders,
            topLevelDomain,
            nativeName

          }=item
          return {
            id: uuidv4(),
            name,
            flag,
            region,
            population,
            capital,
            subregion,
            currencies,
            languages,
            borders,
            topLevelDomain,
            nativeName
          }
        })
        setCountries(newCountries)
        setLoading(false)
      }

    } catch(error) {
      console.log(error)
    }


  }

  useEffect(()=> {
    fetchCountries();
  },[])

  const searchCountries = countries.filter((country) =>
  country.name.toLowerCase().includes(searchTerm.toLowerCase())
);



  return (
    <CountriesContext.Provider value={{countries,loading,setLoading,searchTerm,setSearchTerm,searchCountries,setCountries}}>

      {children}
    </CountriesContext.Provider>

  )
}


export default CountriesContext;