import React,{useContext,useState} from 'react'
import CountriesContext from "../context/ContextApi"

function Search() {
  const { searchTerm, setSearchTerm,setCountries } = useContext(CountriesContext);
  
  const [optionValue,setOptionValue]=useState("")
  const regions= ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    
  };

  const handleChangeOption = async(e) =>{
    let value=e.target.value
    setOptionValue(value)

    try {

      const response= await fetch(`https://restcountries.com/v2/region/${value}`)
      const data= await response.json();
      setCountries(data)

    }catch(error) {
      console.log(error)
    }
    //fetchByRegion(region)
  }
  return (
    <div className='search-wrappers'>
      <input type="text" placeholder='Search for a country' value={searchTerm}
      onChange={handleChange}/>
      <select onChange={handleChangeOption}>
        
        {regions.map((item,index)=>{
          return(
            
            <option key={index} >{item}</option>
          )
        })}
       
      </select>
    </div>
  )
}

export default Search