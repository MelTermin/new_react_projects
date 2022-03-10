import React,{useState,useEffect} from 'react'
import Job from './Job';

function Jobs({ data, setKeywords, keywords }) {
  console.log(keywords)
  const [filteredData, setfilteredData] = useState([]);

  const modifiedData = () => {
    if (keywords) {
    const newData = data.filter((d) => {
      return keywords.every((key) => {
        return (
          d.role === key ||
          d.level === key ||
          d.languages.includes(key) ||
          d.tools.includes(key)
        );
      });
    });
    setfilteredData(newData);
  } else {
    setfilteredData(data);
  }
};

useEffect(() => {
  modifiedData();
  // SearchFunc();
}, [keywords]);

  return (
    <div className=''>
      <div className="jobs">
      {filteredData.map((d) => {
        return <Job key={d.id} data={d} setKeywords={setKeywords} />;
      })}
      </div>
    
    </div>
  )
}

export default Jobs