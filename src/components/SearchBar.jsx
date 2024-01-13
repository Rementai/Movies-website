import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') {
      setSearchTerm('');
    }
  }, [location.pathname]);

  const fetchData = async () => {
    try {
      if (searchTerm) {
        setIsSearching(true);
        const response = await axios.get(`https://at.usermd.net/api/movies`);
        const filteredMovies = response.data.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        onSearch(filteredMovies);
      } else {
        onSearch([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm, onSearch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' />
      <input
        placeholder='Search movies...'
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {isSearching}
    </div>
  );
};

export default SearchBar;
