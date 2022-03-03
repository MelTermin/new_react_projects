import React from 'react'
import {useGlobalContext} from "../context"
import Cocktail from './Cocktail'

function CocktailList() {
  const {cocktails,loading}=useGlobalContext()
  // console.log("cocktails",cocktails)
  // console.log(loading)

  if(loading) {
    return(
      <div style={{textAlign:"center", fontSize:"35px"}}>Loading..</div>
    ) 
  }

  if(cocktails.length<1) {
    return(
      <h3 style={{textAlign:"center", marginLeft:"90px"}}>No cocktails matched your search</h3>
    )
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item)=> {
          return(
            <Cocktail key={item.id} {...item}/>
          )
        })}
      </div>
    </section>
  )
}

export default CocktailList