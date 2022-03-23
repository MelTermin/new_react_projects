import React,{useContext} from 'react'
import UserContext from "../context/ContextApi"

function Search() {

  const { name,setName } = useContext(UserContext);


  return (
      <form>
        <input type="text" placeholder='Please enter a name' value={name} onChange={(e)=>setName(e.target.value)} />
      </form>
  )
}

export default Search