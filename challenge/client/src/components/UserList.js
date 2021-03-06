import React,{useContext,useState} from 'react'
import UserContext from "../context/ContextApi"
import Modal from './Modal';
import Pagination from './Pagination';

function UserList() {
  const { user,setUser } = useContext(UserContext);
  const [modal,setModal]=useState(false);
  const [newData,setNewData]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = user.slice(indexOfFirstPost, indexOfLastPost);


    const paginate = pageNumber => setCurrentPage(pageNumber);
  
    
    const deleteUser= (id) => {
    
      if (window.confirm("Are you sure you want to delete your user info?")){
        const newList = user.filter((item) => item.login.uuid !== id);
        setUser(newList);
        }
 
    }

    const openModal= (id) => {
        const specificUser= user.filter((item)=> {
          return item.login.uuid ===id
        })
        setModal(true)
        setNewData(specificUser)
    
    }

 

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
          {currentPosts && currentPosts.map((item,index)=>{
            return(
              <tr key={index} >
                <th scope="row">{index+1}</th>
                <td>{item.name.first}</td>
                <td>{item.gender.charAt(0).toUpperCase() + item.gender.slice(1)}</td>
                <td>{new Date (item.dob.date).toLocaleDateString("en-US")}</td>
                <td>{item.nat}</td>
                <td>
                    <button className="btn btn-view" onClick={()=>openModal(item.login.uuid)}>View</button>
                    <button className="btn btn-delete" onClick={(()=>deleteUser(item.login.uuid))}>Delete</button>
                </td>
                
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination
         postsPerPage={postsPerPage}
         totalPosts={user.length}
         paginate={paginate}
      
      />
      
      {modal && <Modal setModal={setModal} data={newData}/>}
    </div>
  )
}

export default UserList