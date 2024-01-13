import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiThemoviedatabase } from "react-icons/si";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setIsMobileMenuOpen(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
    window.location.reload();
  };

  const renderAuthButtons = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return (
        <>
          <li className='nav-item'>
            <NavLink
              to='/watchlist'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Add Movie
            </NavLink>
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={handleLogout}
            >
              Log Out
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className='nav-item'>
            <NavLink
              to='/signin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sign In
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/signup'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sign Up
              {isMobileMenuOpen && <div className='divider-line'></div>}
            </NavLink>
          </li>
        </>
      );
    }
  };

  const handleSearch = (results) => {
    setFilteredMovies(results);
  };

  useEffect(() => {
    setFilteredMovies([]);
  }, [location.pathname]);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
              <SiThemoviedatabase className='navbar-icon' />
              MoviesApp
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li>
                <div className='search-bar-container'>
                  <SearchBar
                    onSearch={handleSearch}
                    className={({ isActive }) =>
                      'nav-links' + (isActive ? ' activated' : '')
                    }
                    onClick={closeMobileMenu}
                  />
                  {filteredMovies.length > 0 && (
                    <SearchResults
                      filteredMovies={filteredMovies}
                      onClick={closeMobileMenu}
                      isMobileMenuOpen={isMobileMenuOpen}
                    />
                  )}
                </div>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              {renderAuthButtons()}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;