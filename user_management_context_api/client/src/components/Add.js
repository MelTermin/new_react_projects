import React,{useState,useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {GlobalContext} from "../context/GlobalState"
import { useNavigate } from "react-router-dom";

function Add() {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const {addUser}=useContext(GlobalContext);
  let navigate = useNavigate();

  const submitHandler= (e) => {
    e.preventDefault()

    const newUser = {
      id: uuidv4(),
      name:firstName,
      lastName,
      email
    }
    addUser(newUser)
    navigate("/")
  }

  return (
    <div className='add-container'>
      <form onSubmit={submitHandler}>
        <label>First Name:</label>
        <input type="text" name="firstname" placeholder='Please type your name ' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/> 

        <label>Last Name:</label>
        <input type="text" name="lastname" placeholder='Please type your last ' value={lastName} onChange={(e)=>setLastName(e.target.value)}/> 

        <label>Email:</label>
        <input type="text" name="email" placeholder='Please type your email ' value={email} onChange={(e)=>setEmail(e.target.value)}/> 

        <button className='btn-submit'>Submit</button>
      </form>
      
    </div>
  )
}

export default Add