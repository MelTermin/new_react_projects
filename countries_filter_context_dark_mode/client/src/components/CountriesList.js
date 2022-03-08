import React,{useContext} from 'react'
import CountryCards from './CountryCards'
import CountriesContext from "../context/ContextApi"

function CountriesList() {
  const {countries,searchCountries,searchTerm}=useContext(CountriesContext)

 
  return (
    
    <div className='countries-list-wrapper'>
      {searchTerm ? (searchCountries.map((item,index)=> {
        return (
          <CountryCards key={index} {...item}/>
        )
      })
      ):(
        countries.map((item,index)=> {
          return (
            <CountryCards key={index} {...item}/>
          )
        })
      )}
      
    </div>
  )
}

export default CountriesList