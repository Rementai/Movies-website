import React from 'react';
import { NavLink } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = ({ filteredMovies, onClick, isMobileMenuOpen }) => {
  const containerStyle = isMobileMenuOpen
    ? {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        backgroundColor: '#19191a',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
        maxHeight: '265px',
        overflowY: 'auto',
      }
    : {
        position: 'absolute',
        top: '100%',
        maxWidth: '14.5%',
        minWidth: '14.5%',
        backgroundColor: '#19191a',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
        maxHeight: '265px',
        overflowY: 'auto',
      };

  return (
    <div style={containerStyle}>
      <ul className='search-results'>
        {filteredMovies.map(movie => (
          <li key={movie.id}>
            <NavLink
              to={`/details/${encodeURIComponent(movie.title)}/${movie.id}`}
              className='nav-link'
              onClick={onClick}
            >
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
