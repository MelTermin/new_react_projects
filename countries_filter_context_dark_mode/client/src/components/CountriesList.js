import React,{useContext} from 'react'
import CountryCards from './CountryCards'
import CountriesContext from "../context/ContextApi"

function CountriesList() {
  const {countries}=useContext(CountriesContext)

 
  return (
    
    <div className='countries-list-wrapper'>
      {countries.map((item)=> {
        return (
          <CountryCards key={item.id} {...item}/>
        )
      })}
    </div>
  )
}

export default CountriesList