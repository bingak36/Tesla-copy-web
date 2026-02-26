import React from 'react'
import { headerData } from '../util/header'
const Nav = () => {
    const navLinks = headerData.menus

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <ul className='nav-list'>
            {navLinks.map((nav) => (
                <li key={nav.id}>
                    <a 
                    href={nav.href}
                    onClick={(e)=>{
                        e.preventDefault()
                        scrollTo(nav.id)
                    }}>
                        {nav.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Nav