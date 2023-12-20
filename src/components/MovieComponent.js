import React from 'react';
import { FaStar } from 'react-icons/fa';
import './MovieComponent.css';
import { Link } from 'react-router-dom';

const MovieComponent = ({ title, poster, rating }) => {
  return (
    <Link to="/details">
    <div className='movie-container'>
      <img src={poster} alt={title} className='movie-poster' />
      <h3 className='movie-title'>{title}</h3>
      <div className='movie-rating'>
        <FaStar className='star-icon' />
        <span className='rating-value'>{rating}</span>
      </div>
    </div>
    </Link>
  );
}

export default MovieComponent;
