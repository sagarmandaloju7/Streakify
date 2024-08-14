import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
      <div className="left">
        <div className="title">
        <span class="text-2xl font-bold text-sky-700 dark:text-white">Streakify Technologies</span>
        </div>
      </div>
      <div className="center">
      <ul>
           <li>Home</li>
           <li>About US</li>
           <li>Services</li>
           <li>Courses</li>
           <li>careers</li>
           <li>Contact Us</li>


      </ul>
      </div>
    
      <div className="right">
        <div className="signin">
            SignIn
        </div>

      </div>
      
    </div>
  )
}

export default Header
