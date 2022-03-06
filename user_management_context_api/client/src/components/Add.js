import React,{useState} from 'react'

function Add() {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,Email]=useState("");

  return (
    <div className='add-container'>
      <form>
        <label>First Name:</label>
        <input type="text" name="firstname" placeholder='Please type your name '/> 

        <label>Last Name:</label>
        <input type="text" name="lastname" placeholder='Please type your last '/> 

        <label>Email:</label>
        <input type="text" name="email" placeholder='Please type your email '/> 

        <button className='btn-submit'>Submit</button>
      </form>
      
    </div>
  )
}

export default Add