import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar'>
    <div className='nav-center'>
      <Link className='title' to='/'>The User Management with Context API</Link>
      <ul className='nav-links'>
        <li className='btn'>
          <Link style={{paddingLeft:"10px"}} to='/add'>ADD</Link>
        </li>

      </ul>
    </div>
  </nav>
  )
}

export default Navbar