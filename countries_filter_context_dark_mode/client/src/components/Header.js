import React,{useState,useEffect} from 'react'

const getStorageTheme = () => {
  let theme ='light-theme';
  if(localStorage.getItem('theme')) {
    theme=localStorage.getItem('theme')
  }
  return theme
}

function Header() {
  const [theme,setTheme]=useState(getStorageTheme())


   const toggleTheme= () => {
    if(theme ==='light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

   return (
   
      <nav className='navbar-container'>
        <div>
          <h3>Where is in the world?</h3>
        </div>
        <div>
          <button className='btn' onClick={toggleTheme}>Toggle</button>
        </div>
      </nav>
   
  )
}

export default Header