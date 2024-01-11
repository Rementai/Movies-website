import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signup.css';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangeRoute = () => {
    navigate('/signin');
    window.location.reload();
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      return;
    }

    axios
      .post('https://at.usermd.net/api/user/create', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        handleChangeRoute();
      })
      .catch((error) => {
        console.log(error);
        setFormData({
          name: '',
          email: '',
          password: '',
        });
      });
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h2>Rejestracja</h2>
        <form onSubmit={handleRegistration}>
          <label>
            Nazwa:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Hasło:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Zarejestruj się</button>
        </form>
        <p className="have-account-text">
          Posiadasz już konto? <Link to="/signin">Zaloguj się tutaj!</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;