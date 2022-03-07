import React from 'react'

function CountryCards({name,flag, region,population,capital}) {
  return (
    <div className='card-wrapper'>
      <img className='flag' src={flag} alt={name}/>
      <h2>{name}</h2>
      <p><span>Population: </span>{population}</p>
      <p><span>Region: </span>{region}</p>
      <p><span>Capital: </span>{capital}</p>
    </div>
  )
}

export default CountryCards