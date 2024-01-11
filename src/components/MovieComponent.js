import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./MovieComponent.css";

const MovieComponent = ({ id, title, image, rate }) => {
  return (
    <Link to={`/details/${encodeURIComponent(title)}/${id}`}>
      <div className='movie-container'>
        <img src={image} alt={title} className='movie-poster' />
        <h3 className='movie-title'>{title}</h3>
        <div className='movie-rating'>
          <FaStar className='star-icon' />
          <span className='rating-value'>{rate.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieComponent;
