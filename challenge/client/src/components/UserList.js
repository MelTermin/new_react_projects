import React,{useContext} from 'react'
import UserContext from "../context/ContextApi"

function UserList() {
  const { user } = useContext(UserContext);
  


  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th style= {{textAlign:"center"}}>No</th>
            <th style= {{textAlign:"center"}}>Name</th>
            <th style= {{textAlign:"center"}}>Gender</th>
            <th style= {{textAlign:"center"}}>Date of Birth</th>
            <th style= {{textAlign:"center"}}>Nationality</th>
            <th style= {{textAlign:"center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {user && user.map((item,index)=>{
            return(
              <tr key={index} >
                <th scope="row">{index+1}</th>
                <td>{item.name.first}</td>
                <td>{item.gender.charAt(0).toUpperCase() + item.gender.slice(1)}</td>
                <td>{new Date (item.dob.date).toLocaleDateString("en-US")}</td>
                <td>{item.nat}</td>
                <td>
                    <button className="btn-look">Look</button>
                    <button className="btn-delete"  >Delete</button>
                </td>
                
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserList