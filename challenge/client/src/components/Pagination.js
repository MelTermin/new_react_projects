import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate }) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='page-item'>
   
      {pageNumbers.map(number => (
        <div key={number}  >
          <button onClick={() => paginate(number)}  className='page-btn'>
            {number}
          </button>
        </div>
      ))}
  
  </div>
  )
}

export default Pagination