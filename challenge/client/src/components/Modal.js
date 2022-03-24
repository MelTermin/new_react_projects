import React from 'react'

function Modal({setModal,data}) {
  console.log("data modal",data)
  return (
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className="body">
        <div >
          <img src={data[0].picture.medium}/>
        </div>
        <div>
          <h3>{data[0].name.title +" "+ data[0].name.first +" "+  data[0].name.last }</h3>
          <p>Email: <span>{data[0].email}</span></p>
          <p>Gender: <span>{data[0].gender}</span></p>
          <p>Date of Birth: <span>{data[0].dob.date}</span></p>
          <p>Nationality: <span>{data[0].nat}</span></p>
        </div>

      </div>
      
    </div>
  </div>
  )
}

export default Modal