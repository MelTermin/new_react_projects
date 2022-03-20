import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <header>
    <div className="container">
      <div className="inner-content">
        <div className="brand">
          <Link to="/">Movie Watch List Project</Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/watchlist">Watch List</Link>
          </li>

          <li>
            <Link to="/watchedList">Watched</Link>
          </li>

        </ul>
      </div>
    </div>
  </header>
  )
}

export default Header