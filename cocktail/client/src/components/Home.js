import React from 'react'
import Search from './Search'
import CocktailList from './CocktailList'

function Home() {
  return (
    <div className='home-container'>
      <Search/>
      <CocktailList/>

    </div>
  )
}

export default Home