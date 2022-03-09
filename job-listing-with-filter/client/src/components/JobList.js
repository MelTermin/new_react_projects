import React from 'react'

function JobList({company,logo,featured,position,role,level,postedAt
,contract,location,languages,tools,new1}) {
  return (
    <div className='card-wrapper'>
      <div className='iamge-wrapper'>
        <img src={logo} alt={company}></img>
      </div>
      <div className='first-row-details'>
        <p>{company}</p>
        { new1 && <span className="company-new flags">New!</span> }
        { featured && <span className="company-featured flags">Featured</span> }
        <p>{position}</p>
        <p>{postedAt}</p>
        <p>{contract}</p>
        <p>{location}</p>
      </div>
      <div className='categories'>
        <button className='btn'>{role}</button>
        <button  className='btn' >{level}</button>
        {languages.map((item)=>{
          return(
            <button className='btn'>{item}</button>
          )
        })}
        {tools.map((item)=>{
          return(
             <button className='btn'>{item}</button>
            )
        })}

      </div>
    
    </div>
  )
}

export default JobList