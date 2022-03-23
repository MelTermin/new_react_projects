import React, { useState, useEffect, createContext } from 'react'

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user,setUser]=useState([]);
  const [name,setName]=useState("");
 


  const fetchUser= async()=> {
    try {
      if(!name) {
        const response=  await fetch("https://randomuser.me/api/?results=100")
        const data= await response.json();
        console.log("data",data)
        setUser(data.results)


      
       
      } else {
        const searchUserName = user.filter((item) =>
        item.name.first.toLowerCase().includes(name.toLowerCase())
      );
        setUser(searchUserName)
      }


    }catch(error) {
      console.log(error)
    }

  }

 

  useEffect(()=> {
    fetchUser()

  },[name])





  return (
    <UserContext.Provider value={{user,setUser,name,setName,fetchUser}}>

      {children}
    </UserContext.Provider>

  )
}

export default UserContext;