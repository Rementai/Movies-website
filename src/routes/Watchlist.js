import React, { useState } from 'react';
import '../styles/Watchlist.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Watchlist = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    content: '',
    genre: '',
    rate: '',
  });
  const [errorFields, setErrorFields] = useState({});
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrorFields({
      ...errorFields,
      [name]: false,
    });
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const handleChangeRoute = () => {
    navigate('/');
    window.location.reload();
  };

  const handleAdd = async (event) => {
    event.preventDefault();

    const fieldsToCheck = ['title', 'image', 'content', 'genre', 'rate'];
    const newErrorFields = {};

    fieldsToCheck.forEach((field) => {
      if (!formData[field]) {
        newErrorFields[field] = true;
      } else {
        newErrorFields[field] = false;
      }
    });

    setErrorFields(newErrorFields);

    if (Object.values(newErrorFields).some((error) => error)) {
      setShowErrorModal(true);
      return;
    }

    axios
      .post('https://at.usermd.net/api/movies', {
        title: formData.title,
        image: formData.image,
        content: formData.content,
        rate: formData.rate,
        genre: formData.genre,
      })
      .then(() => {
        handleChangeRoute();
      })
      .catch((error) => {
        console.log(error);

        setFormData({
          title: '',
          image: '',
          rate: '',
          genre: '',
          content: '',
        });

        setShowErrorModal(true);
      });
  };

  return (
    <div className="container">
      <div className="add-movie-box">
        <div className="add-movie-container">
          <h2>Dodaj film</h2><br/><br/>
          <form className="add-movie-form">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Tytuł"
              value={formData.title}
              onChange={handleInputChange}
              className={errorFields.title ? 'error' : ''}
            />
            <input
              type="text"
              id="image"
              name="image"
              placeholder="URL obrazu"
              value={formData.image}
              onChange={handleInputChange}
              className={errorFields.image ? 'error' : ''}
            />
            <input
              type="text"
              id="genre"
              name="genre"
              placeholder="Gatunek"
              value={formData.genre}
              onChange={handleInputChange}
              className={errorFields.genre ? 'error' : ''}
            />
            <input
              type="text"
              id="rate"
              name="rate"
              placeholder="Ocena"
              value={formData.rate}
              onChange={handleInputChange}
              className={errorFields.rate ? 'error' : ''}
            />
            <textarea
              id="content"
              name="content"
              rows="10"
              placeholder="Opis filmu"
              value={formData.content}
              onChange={handleInputChange}
              className={errorFields.content ? 'error' : ''}
            />
            <br/>
            <button type="submit" onClick={handleAdd}>
              Dodaj
            </button>
          </form>
        </div>
      </div>

      {showErrorModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseErrorModal}>&times;</span>
            <p>Wystąpił błąd. Film nie został dodany.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Watchlist;
