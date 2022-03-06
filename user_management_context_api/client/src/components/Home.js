import React,{useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"
import UserList from './UserList';


function Home() {
  const {users}=useContext(GlobalContext);

  if(users.length===0) {
    return <h3 style={{textAlign:"center", margin:"90px"}}>No user has been added yet.</h3>
  }
  return (
   users.map((user)=>{
     return(
       <UserList key={user.id} {...user}/>
     )
   })
  )
}

export default Home