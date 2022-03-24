import React,{useContext,useState} from 'react'
import UserContext from "../context/ContextApi"

function Search() {

  const { name,setName,setUser,user,fetchUser} = useContext(UserContext) 
  const [optionValue,setOptionValue]=useState("")
  const[genderValue,setGenderValye]=useState("")
  const gender= ["Not specified","female","male"]

  const natList=["ALL","AU", "BR", "CA", "CH", "DE", "DK", "ES", "FI", "FR", "GB", "IE", "IR", "NO", "NL", "NZ", "TR", "US"]

  const handleOption = async(e) => {
    const value=e.target.value
    setOptionValue(value)

    try {
      if(value==="ALL") {
          fetchUser()
        }else {
          const newItems = user.filter((item) => item.nat === value);
          setUser(newItems);
        }
    } catch(error) {
      console.log(error)
    }
  }

  const handleGender= async(e) => {
    const value=e.target.value
    setGenderValye(value)

    try {
      if(value==="Not specified") {
        fetchUser()
      }else {
        const newItems = user.filter((item) => item.gender === value);
        setUser(newItems);
      }
      // const response= await fetch(`https://randomuser.me/api/?gender=${genderValue}`)
      // const data= await response.json()
      // setUser(data.results)

    } catch(error) {
      console.log(error)
    }
  }

  return (
      <form>
         <label>Search by Name:</label>
        <input type="text" placeholder='Please enter a name' value={name} onChange={(e)=>setName(e.target.value)} />
        <label>Choose a nationality:</label>
        <select onChange={handleOption}>
       
          {natList.map((item,index)=>{
            return (
              <option key={index}>{item}</option>
            )
          })}
        </select>
        <label>Choose a gender:</label>
       
          <select onChange={handleGender}>
          
            {gender.map((item,index)=> {
            return(
              <option key={index}>{item}</option>
            )
            })}
          </select>

      </form>
  )
}

export default Search