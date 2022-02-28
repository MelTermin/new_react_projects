
import './App.css';
import Tours from './Tours';
import React, {useState,useEffect} from 'react'

function App() {
  const [tours,setTours]=useState([]);
  const [loading,setLoading]=useState(false)
  const url="https://course-api.com/react-tours-project";

  const getTours=async() => {
    const response= await fetch(url)
    const data=await response.json()
    console.log("data",data)
    setTours(data)

  }

  useEffect(()=> {
   getTours();
  },[])


  if(tours.length ===0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button style={{marginLeft:"600px"}} className='btn' onClick={getTours} >
            refresh
          </button>
        </div>
      </main>
    )
  } else {
    return (
          <div className="mani-wrapper">
             <Tours tours={tours} setTours={setTours}></Tours>
          </div>
          )
        }

}

export default App;
