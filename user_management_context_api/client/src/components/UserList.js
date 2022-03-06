import React , { useContext }from 'react'
import {GlobalContext} from "../context/GlobalState"
import {Link} from "react-router-dom";


function UserList({email,name,lastName,id}) {
  const { removeUser } = useContext(GlobalContext);
 

  
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
            <tr key={id}>
            
              <td>{name}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>
                <Link to= {`/edit/${id}`}>
 
                  <button className="btn btn-edit" >
                    Edit
                  </button>
                </Link>
                <button className="btn btn-delete" onClick={()=>removeUser(id)} >Delete</button>
              </td>
              
            </tr>
          
      </tbody>
    </table>
  
  </div>
  )
}

export default UserList