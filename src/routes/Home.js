import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import MovieComponent from '../components/MovieComponent';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('https://at.usermd.net/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });

    // Sprawdzanie, czy użytkownik jest zalogowany
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // Funkcja do odświeżania listy filmów po usunięciu
  const refreshMovies = () => {
    axios.get('https://at.usermd.net/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  };

  return (
    <div>
      <Container>
        <Row className="movie-list">
          {movies.map((movie) => (
            <MovieComponent
              key={movie.id}
              {...movie}
              isLoggedIn={isLoggedIn}
              refreshMovies={refreshMovies}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
