import React,{useContext,useState} from 'react'
import {GlobalContext} from "../context/GlobalState"
import {Link} from "react-router-dom";


function Home() {
  const {users,removeUser }=useContext(GlobalContext);
  const [filteredResults, setFilteredResults] = useState([]);
  const [search,setSearch]=useState("")

  if(users.length===0) {
    return <h3 style={{textAlign:"center", margin:"90px"}}>No user has been added yet.</h3>
  }


  return (

  <div style= {{marginTop:"150px"}}>


    <table className="styled-table">
      <thead>
        <tr>
        
          <th style= {{textAlign:"center"}}>First Name</th>
          <th style= {{textAlign:"center"}}>Last Name</th>
          <th style= {{textAlign:"center"}}>Email</th>
          <th style= {{textAlign:"center"}}>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user)=> {
          return (
            <tr key={user.id}>
            
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>
              <Link to= {`/edit/${user.id}`}>

                <button className="btn btn-edit" >
                  Edit
                </button>
              </Link>
              <button className="btn btn-delete" onClick={()=>removeUser(user.id)} >Delete</button>
            </td>
          </tr>
          )
        })}  
      </tbody>
    </table>
  
  </div>

  )
}

export default Home