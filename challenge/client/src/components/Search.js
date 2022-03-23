import React,{useContext} from 'react'
import UserContext from "../context/ContextApi"

function Search() {

  const { name,setName,newD} = useContext(UserContext);

  const removeDuplicateNationality= newD.filter((item,index)=> {
    return newD.indexOf(item)===index
  })

  console.log(removeDuplicateNationality)
  return (
      <form>
        <input type="text" placeholder='Please enter a name' value={name} onChange={(e)=>setName(e.target.value)} />
        <select>
          {removeDuplicateNationality.map((item,index)=>{
            return (
              <option key={index}>{item}</option>
            )
          })}
        </select>
      </form>
  )
}

export default Search