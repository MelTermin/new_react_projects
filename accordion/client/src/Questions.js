import React,{useState} from 'react'
import data from './data'
import SingleQuestion from './SingleQuestion'

function Questions() {
  
  const[questions,setQuestions]=useState(data)
  
  return (
    <div className='questions-container'>
      <h2>Questions and Answers About Login</h2>
        {questions.map((item)=> {
          return(
            <SingleQuestion key={item.id} {...item}/>
          )
        })}
    </div>
  )
}

export default Questions