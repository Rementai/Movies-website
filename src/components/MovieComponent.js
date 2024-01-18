import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./MovieComponent.css";

const MovieComponent = ({ id, title, image, rate }) => {

  return (
    <div className='movie-container'>
      <Link to={`/details/${encodeURIComponent(title)}/${id}`}>
        <img src={image} alt={title} className='movie-poster' />
      </Link>
      <h3 className='movie-title'>{title}</h3>
      <div className='movie-rating'>
        <FaStar className='star-icon' />
        <span className='rating-value'>{rate.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default MovieComponent;
