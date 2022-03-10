import './App.css';
import data from "./data.json"
import Jobs from './components/Jobs';
import React,{useState, useEffect} from "react"
import FilterList from './components/FilterList';

function App() {
 
  const [filterKeywords, setfilterKeywords] = useState([]);



  const addFilterKeywords= (keyword) => {
    
    if(!filterKeywords.includes(keyword)) {
      setfilterKeywords([...filterKeywords,keyword])
    }
   
  }
  const deleteKeyword = (keyword) => {
    const newKeywords = filterKeywords.filter((key) => key !== keyword);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  };

  return (
    <div className="App">
     <div className="green-header"></div>
    {filterKeywords.length>0 && <FilterList 
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}/>}
     <div className='job-card-wrapper'>
       <Jobs
          keywords={filterKeywords}
          data={data}
          setKeywords={addFilterKeywords}
       />

     </div>

    </div>
  );
}

export default App;
