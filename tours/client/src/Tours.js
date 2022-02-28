import React,{useState} from 'react'

function Tours({tours,setTours}) {
  const [readMore, setReadMore] = useState(false);
 // console.log("tours from component",tours)

 const handleDelete= (id) => {
   console.log(id)
   setTours (tours.filter((item)=> {
    return item.id!==id
  }))

 }
  return (
    <div className='tour-container'>
           <div className="title">
             <h2>Our Tours</h2>
              <div className="underline"></div>
            </div>
      {tours.map((tour)=> {
        return(
          <div key={tour.id} className='tour-card'>
              <img src= {tour.image}/>
              <div className='details'>
                <p>{tour.name}</p>
                <p>${tour.price}</p>
              </div>
              <div className='info'>
               <p>
                  {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
                  <button className='btn-read-more' onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'show less' : '  read more'}
                  </button>
               </p>
              </div>
              <button className='btn' onClick= {() => handleDelete(tour.id)}>Not Interested</button>
          </div>
        )
      })}
    </div>
  )
}

export default Tours