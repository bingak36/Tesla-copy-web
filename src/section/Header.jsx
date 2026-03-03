import React from 'react'
import { NavData } from '../Util/Header'

const Header = () => {

  const navLinks = NavData.menu
  return (
    <div className='stiky-header'>  
      <ul className='header-nav'>
        {navLinks.map((nav)=>(
          <li key={nav.id}>
            <a href={nav.href}>{nav.label}</a>
          </li>
        ))}
      </ul>

      
      <div className='header-logo' />
      <div>
        
      </div>
    </div>
  )
}

export default Header