import React from 'react'
import '../css/Header.css'
function Header() {
  return (
    <div className='header'>
        <div className="logo">
            <img src="/assets/logo.png" alt="Logo" />
            <span>NaWee</span>
        </div>

        <div className="options">
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/help'>Help</a></li>
                <li><a href='/contact'>Contact Us</a></li>
                <li><a href='/assets/logo.png' download>Download</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header