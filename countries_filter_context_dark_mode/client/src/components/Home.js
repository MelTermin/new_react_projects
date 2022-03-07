import React from 'react'
import CountriesList from './CountriesList'
import Search from './Search'

function Home() {
  return (
    <div>
      <Search/>
      <CountriesList/>
    </div>
  )
}

export default Home