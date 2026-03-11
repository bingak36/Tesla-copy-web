import React, { useState, useEffect } from 'react'
import { NavData } from '../Util/Header'
import './Styles/Header.scss'

const Header = ({ showTopBanner }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = NavData.menu
  const logo = NavData.logo
  const icon = NavData.icon
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''} ${!showTopBanner ? 'top-up' : ''}`}>

    <div className='sticky-header'>  
      <ul className='nav-text'>
        {navLinks.map((nav)=>(
          <li key={nav.id}>
            <a href={nav.href}>{nav.label}</a>
          </li>
        ))}
      </ul>
      
      <a href={logo.href} className='logo'>
        <img key={logo.id} src={logo.src} alt={logo.alt} />
      </a>

      <ul className='nav-icon'>
        {icon.map((nav)=>(
          <li key={nav.id}>
            <a href={nav.href}>
              <img src={nav.icon} alt={nav.alt} />
            </a>
          </li>
        ))}
      </ul>

    </div>
    </div>
  )
}

export default Header