import React, { useState, useEffect, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

const CountriesContext = createContext()

export const CountriesProvider = ({children}) => {
  const [countries, setCountries]=useState([]);
  const [loading, setLoading]=useState(true)

  useEffect(()=> {
    fetchCountries();
  },[])

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
            capital

          }=item
          return {
            id: uuidv4(),
            name,
            flag,
            region,
            population,
            capital
          }
        })
        setCountries(newCountries)
      }

    } catch(error) {
      console.log(error)
    }


  }



  return (
    <CountriesContext.Provider value={{countries}}>

      {children}
    </CountriesContext.Provider>

  )
}


export default CountriesContext;