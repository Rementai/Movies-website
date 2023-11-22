import React from 'react';
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import '../App';
import MovieComponent from '../components/MovieComponent';

const exampleMovie = {
    title: 'Example Movie',
    poster: 'movie_placeholder.jpg',
    rating: 8.5,
  };
  
  const numberOfCopies = 4;
  
  const movies = Array(numberOfCopies).fill(exampleMovie);

function Home() {
    return (
      <div className='home'>
        <div className='movie-list'>
          {movies.map((movie, index) => (
            <MovieComponent key={index} {...movie} />
          ))}
        </div>
      </div>
    );
  }

export default Home;