import React, {useState} from 'react'

function SingleQuestion({title,info}) {
  const [showInfo,setShowInfo]=useState(false);

  return (
      <div  className='question-items'>
        <div className='item-div'>
          <p>{title}</p>
          <button onClick={()=>setShowInfo(!showInfo)}>
            {!showInfo ?`+`:`-` }</button>
        </div>
      {showInfo && <p>{info}</p>}
      
      </div>
  )
}

export default SingleQuestion