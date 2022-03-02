import React from 'react'

function Follerwers({avatar_url, url,login}) {
  return (
    <div className='followers-card'>
      
      <div className='items'>
        <img src={avatar_url} alt={login}/>
        <p>{login}</p>
        <a href={url} className="btn">view profile</a>
      </div>

    </div>
  )
}

export default Follerwers