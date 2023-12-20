import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import { SiThemoviedatabase } from "react-icons/si";
import {FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import SearchBar from './SearchBar';

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return(
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
            <div className='navbar-container container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    <SiThemoviedatabase className='navbar-icon'/>
                    MoviesApp
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                <div className='search-bar-container'>
                    <SearchBar  
                        className={({ isActive }) => 
                        'nav-links' + ( isActive ? ' activated' : '')
                    }
                    onClick={closeMobileMenu}/>
                </div>
                </li>
                    <li className='nav-item'>
                        <NavLink to='/' 
                        className={({ isActive }) => 
                        'nav-links' + ( isActive ? ' activated' : '')
                    }
                    onClick={closeMobileMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/watchlist' 
                        className={({ isActive }) => 
                        'nav-links' + ( isActive ? ' activated' : '')
                        }
                        onClick={closeMobileMenu}
                        >
                            Watchlist
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/signin' 
                        className={({ isActive }) => 
                        'nav-links' + ( isActive ? ' activated' : '')
                        }
                        onClick={closeMobileMenu}
                        >
                            Sign in
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/signup' 
                        className={({ isActive }) => 
                        'nav-links' + ( isActive ? ' activated' : '')
                        }
                        onClick={closeMobileMenu}
                        >
                            Sign up
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;