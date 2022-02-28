import React,{useState} from 'react'
import reviews from "./data"

function Reviews() {
  //console.log("reviews",reviews)
  const [index, setIndex] = useState(0);
  const {name,job,image,text}=reviews[index]

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const handleNext= () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }
  const handlePrev= () => {
    setIndex((index) => {
      let newIndex = index -1;
      return checkNumber(newIndex);
    });
  }

  const handleSuprize= () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    //console.log(randomNumber)
    setIndex(randomNumber)
  }
  
  
  return (
    <div>
      <div className='title'>
        <p>Our Reviews</p>
        <div className='underline'></div>
      </div>
      <div className='card'>
        <img src={image}></img>
        <p className='name'>{name}</p>
        <p className='job'>{job}</p>
        <p className='text'>{text}</p>
        <div className='btn-container'>
            <button onClick= {handlePrev} >Previous</button>
            <button onClick= {handleNext}>Next</button>
            <button onClick= {handleSuprize}>Suprize Me</button>
        </div>

 

      </div>

    </div>
  )
}

export default Reviews