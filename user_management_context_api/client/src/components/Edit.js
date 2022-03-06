import React,{ useState, useContext, useEffect} from 'react'
import {GlobalContext} from "../context/GlobalState"
import { useNavigate,useParams } from "react-router-dom";

function Edit() {
  
 
  let params = useParams(); 
  const { editUser, users } = useContext(GlobalContext);
  let navigate = useNavigate();

  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
    email:"",
    lastName:""
    
  })

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }


  useEffect(() => {
  
    const selectedUser = users.find(user => user.id === params.id);
    setSelectedUser(selectedUser);
  }, [params.id, users])


  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    navigate("/")
  }





  return (
    <div>
        <form  onSubmit={onSubmit} >
        <label>First Name:</label>
        <input type="text" name="name" value={selectedUser.name} onChange={onChange} placeholder='Please type your name ' /> 

        <label>Last Name:</label>
        <input type="text" name="lastName" value={selectedUser.lastName} onChange={onChange} placeholder='Please type your last '  /> 

        <label>Email:</label>
        <input type="text" name="email"  value={selectedUser.email} onChange={onChange}placeholder='Please type your email '/> 

        <button className='btn-submit'>Edit</button>
      </form>
    </div>
  )
}

export default Edit