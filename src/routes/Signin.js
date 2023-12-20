import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signin.css';

function Signin() {
    const [formData, setFormData] = useState({
        login: '',
        haslo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login data:', formData);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Login:
                        <input type="text" name="login" value={formData.login} onChange={handleChange} required />
                    </label>
                    <br />
                    <label>
                        Hasło:
                        <input type="password" name="haslo" value={formData.haslo} onChange={handleChange} required />
                    </label>
                    <br />
                    <button type="submit">Zaloguj się</button>
                </form>
                <p className="need-account-text">
                    Potrzebujesz konto? <Link to="/signup">Zarejestruj się!</Link>
                </p>
            </div>
        </div>
    );
}

export default Signin;
