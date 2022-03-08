import React from 'react'
import { useNavigate } from "react-router-dom";

function CountryCards({name,flag, region,population,capital}) {
  let navigate = useNavigate();
  
  const handleDetail= () => {
    navigate(`/country/${name}`) 
  }
  return (
    <div className='card-wrapper' onClick={handleDetail}>
      <img className='flag' src={flag} alt={name}/>
      <h2>{name}</h2>
      <p><span>Population: </span>{population}</p>
      <p><span>Region: </span>{region}</p>
      <p><span>Capital: </span>{capital}</p>
    </div>
  )
}

export default CountryCards