import React from 'react'
import {Link} from "react-router-dom";

function Cocktail({id,name,image,info,glass}) {
  return (
    <div className='cocktail'>
      <div>
        <img src= {image} alt={name}/>
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn-primary'>Details</Link>
      </div>
    </div>
  )
}

export default Cocktail