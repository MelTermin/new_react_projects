import React, {useState} from 'react'
import {data} from "./data"

function ReminderList() {
  const [person,setPerson]=useState(data)
  return (
    <main >
     
      <section className='container'>
      <h2>{person.length} Birthdays Today</h2>
        {person.map((item)=> {
          return (
            <div className='birthday-list' key={item.id}>
               <img className='image' src= {item.image}/>
              <div className='details'>
                <h4>{item.name}</h4>
                <p>{item.age} years old</p>
              </div>
            </div>
          )
        })}
        <button onClick= {() => setPerson([])}>Clear All</button>

      </section>
   

    </main>
  )
}

export default ReminderList