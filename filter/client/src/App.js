
import './App.css';
import React,{useState,useEffect} from "react";
import {MDBTable,MDBTableHead,MDBTableBody,MDBRow,MDBCol,MDBContainer,MDBBtn, MDBPagination, MDBPaginationItem, MDBPaginationLink} from "mdb-react-ui-kit";

function App() {
 
  
  const [data,setData]=useState([]);
  const [name,setName]=useState("")
  const [sortValue,setSortValue]=useState("")
  // const [currentPage,setCurrentPage]=useState(0)
  // const [pageLimit]=useState(4)

  const sortOptions=["username","email","phone","address"]

  useEffect(()=> {
    loadUserData(0,4,0)
  },[])

  const loadUserData= async()=> {
    const response= await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users= await response.json()
    console.log(users,"users")
    setData(users)
    
  }

  const searchUrl=`https://jsonplaceholder.typicode.com/users?q=${name}`

  const handleSubmit= async(e) => {
    e.preventDefault();
    const response= await fetch(searchUrl);
    const responseData= await response.json()
    setData(responseData)
    setName("")


  }

  const handleReset = () => {
      loadUserData(0,4,0)
  }

  const handleSelect= async(e) => {
    let value=e.target.value
    setSortValue(value)
    const response= await fetch(`https://jsonplaceholder.typicode.com/users?_sort=${value}&_order=asc`);
    const responseData= await response.json()
    setData(responseData)

  }
  
  // const renderPagination = () => {
  //   if(currentPage===0) {
  //     return(
  //       <MDBPagination className='mb-0'>
  //         <MDBPaginationItem>
  //           <MDBPaginationLink>1</MDBPaginationLink>
  //         </MDBPaginationItem>
  //         <MDBPaginationItem>
  //           <MDBBtn onClick={()=>loadUserData(4,8,1)}>Next</MDBBtn>
  //         </MDBPaginationItem>
  //       </MDBPagination>
  //     )
  //   } else if(currentPage<pageLimit-1 && data.length === pageLimit) {
  //       return (
  //         <MDBPagination className='mb-0'>
          
  //         <MDBPaginationItem>
  //           <MDBBtn onClick={()=>loadUserData((currentPage-1)*4,currentPage*4,-1)}>Prev</MDBBtn>
  //         </MDBPaginationItem>
          
  //         <MDBPaginationItem>
  //           <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
  //         </MDBPaginationItem>
         
  //         <MDBPaginationItem>
  //           <MDBBtn onClick={()=>loadUserData((currentPage+1)*4,(currentPage+2)*4,-1)}>Next</MDBBtn>
  //         </MDBPaginationItem>
  //       </MDBPagination>
  //       )
  //   } else {
  //     return (
  //       <MDBPagination className='mb-0'>
 
  //       <MDBPaginationItem>
  //         <MDBBtn onClick={()=>loadUserData(4,8,-1)}>Prev</MDBBtn>
  //       </MDBPaginationItem>
  //       <MDBPaginationItem>
  //         <MDBPaginationLink>{currentPage +1}</MDBPaginationLink>
  //       </MDBPaginationItem>
  //     </MDBPagination>
  //     )
  //   }
  // }
  return (

    <MDBContainer>
      <h2 >Search, Filter</h2>
      <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
          <input type="text" placeholder="Search by Name" className="form-control" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
         
            <MDBBtn type="submit" color="dark">Search</MDBBtn>
            <MDBBtn className="mx-2" color="info" onClick={()=>handleReset()}>Reset</MDBBtn>
         
      </form>
    
    <div className='option'>
    <select onChange={handleSelect}>
          <option>Please select value</option>
          {sortOptions.map((item,index)=> {
            return(
              <option value={item} key={index}>{item}</option>
            )
          })}
        </select>
    </div>


     
  
      <div style={{marginTop:"100px"}}>
        
        <MDBRow>
          <MDBCol size="12">
            <MDBTable>
              <MDBTableHead dark>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Address</th>

                </tr>

              </MDBTableHead>
              {data.length===0 ? (<MDBTableBody>
                <tr>
                  <td className="text-center mb-0">No Data Found</td>
                </tr>
              </MDBTableBody>
              ):(
                data.map((item,index)=> {
                  return(
                    <MDBTableBody key= {index}>
                    <tr>
                      <th scope="row"> {index+1}</th>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.address.city}</td>
                    </tr>

                  </MDBTableBody>
                  )

                })
              )}
            </MDBTable>
          </MDBCol>
        </MDBRow>
        {/* <div className='pages-container'>{renderPagination()}</div> */}
      </div>
    </MDBContainer>
  );
}

export default App;
