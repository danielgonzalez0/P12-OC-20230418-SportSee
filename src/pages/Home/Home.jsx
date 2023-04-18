import React, { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * React component given the HTML structure of the home page
 * @returns {React.ReactElement} Home
 */
const Home = () => {
  const userId = useRef();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

    /**
     * control and submit logic of the form
     * @param {Event}
     */
    const handleSubmit = (e) => {
      e.preventDefault();
      if (userId.current.value === '' || isNaN(userId.current.value)) {
        setError(true);
      } else {
        navigate('/user/' + userId.current.value);
      }
    };
  

  return (
    <div>
      <h1>Bienvenue chez SportSee</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="id">Veuillez Entrer votre ID utilisateur</label>
        <input
          type="text"
          id="id"
          ref={userId}
          autoComplete="off"
          onChange={() => {
            setError(false);
          }}
        />
        <input type="submit" value={'Validez'} />
        {error && (
          <p className="error">Veuillez entrer un chiffre uniquement</p>
        )}
      </form>
    </div>
  );
};

export default Home;
