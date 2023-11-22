import React from 'react';
import { FaStar } from 'react-icons/fa';
import './MovieComponent.css';

const MovieComponent = ({ title, poster, rating }) => {
  return (
    <div className='movie-container'>
      <img src={poster} alt={title} className='movie-poster' />
      <h3 className='movie-title'>{title}</h3>
      <div className='movie-rating'>
        <FaStar className='star-icon' />
        <span className='rating-value'>{rating}</span>
      </div>
    </div>
  );
}

export default MovieComponent;
