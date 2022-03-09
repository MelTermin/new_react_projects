import './App.css';
import JobList from './components/JobList';
import React,{useState, useEffect} from "react"

function App() {
  const [data,setData]=useState([]);

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
     setData(data)
    })
  }, [])

  return (
    <div className="App">
     <div className="green-header"></div>
     <div className='job-card-wrapper'>
      {data.map((item)=> {
        return (
          <JobList key={item.id} {...item}/>
        )
      })}
     </div>

    </div>
  );
}

export default App;
