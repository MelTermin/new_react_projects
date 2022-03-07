import React,{useState,useEffect,useContext} from 'react'
import { useParams} from "react-router-dom";
import CountriesContext from "../context/ContextApi"

function Detail() {
  const {name} = useParams();

  const {countries}=useContext(CountriesContext)
  const [singleCountry, setSingleCountry]=useState([]);
  const [borders,setBorders]=useState([])

  
  

  const getSingleCountry= async () => {

   const details= countries.filter((item)=> {
     return item.name.toLowerCase()===name.toLowerCase()
    })

    const borderCode= details.map((item)=> {
      return item.borders
    })

    setSingleCountry(details)
    setBorders(borderCode)
  }

  useEffect(()=> {
    getSingleCountry()
   
  },[name,countries])

  




  return (
    <div className='detail-wrapper'>
      <button>Go Back</button>
      {singleCountry.map((country)=> {
        return(
          <div key={country.id}>
            <div className='image-flag'>
              <img src={country.flag} alt={country.name}/>
            </div>
            <div className='other-details'>
              <h3>{country.name}</h3>
              <p><span>Native Name: </span>{country.nativeName}</p>
              <p><span>Population: </span>{country.population}</p>
              <p><span>Region: </span>{country.region}</p>
              <p><span>Sub Region: </span>{country.subregion}</p>
              <p><span>Capital: </span>{country.capital}</p>
              <p><span>Top Level Domain: </span>{country.topLevelDomain}</p>
              <p><span>Currencies: </span>{country.currencies ? (country.currencies[0].name):(<small>No currency avaliable</small>)}</p>
              <p><span>Languages: </span>
                    {country.languages.map((language, index, arr) => (
                      <small key={index}>{language.name}</small>
                    ))}
                  </p>
              <div className='border-countries-wrapper'>
                <span>Border Countries: </span>
              </div>
            </div>
           
          </div>
        )
      })}
    
    

    </div>
  )
}

export default Detail