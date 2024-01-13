import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Signin.css';
import axios from "axios";

function Signin() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!formData.login || !formData.password) {
            return;
        }

        axios
            .post('https://at.usermd.net/api/user/auth', {
                login: formData.login,
                password: formData.password
            })
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                handleChangeRoute();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleChangeRoute = () => {
        navigate("/");
        window.location.reload();
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        Login:
                        <input type="text" name="login" value={formData.login} onChange={handleChange} required />
                    </label>
                    <br />
                    <label>
                        Hasło:
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </label>
                    <br />
                    <button type="submit">Zaloguj się</button>
                </form>
                <br/><p className="need-account-text">
                    Potrzebujesz konto? <Link to="/signup">Zarejestruj się!</Link>
                </p>
            </div>
        </div>
    );
}

export default Signin;
