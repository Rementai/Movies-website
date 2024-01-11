import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import '../App';
import MovieComponent from '../components/MovieComponent';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://at.usermd.net/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div>
      <Container>
        <Row className="movie-list">
          {movies.map((movie) => (
            <MovieComponent key={movie.id} {...movie} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;