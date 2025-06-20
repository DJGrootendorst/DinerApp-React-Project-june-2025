import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import Button from '../../components/button/Button.jsx';
import './Login.css';
import { AuthContext } from '../../context/AuthContext.jsx';

function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [formState, setFormState] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        login(formState);

    };

    return (
        <Layout headerContent={
            <div className="home-header">
                <Button text="Inloggen" buttonClass="button-login" onClick={() => navigate('/login')} />
                <Button text="Registreren" buttonClass="button-register" onClick={() => navigate('/register')} />
            </div>
        }>
            <main className="login-main">
                <div className="form-login">
                    <div className="form-content">
                        <h1>INLOGGEN</h1>
                        <p>Heb je nog geen account? <Link to="/Register">Registreren</Link></p>

                        <form className="form-input" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formState.username}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Wachtwoord"
                                value={formState.password}
                                onChange={handleChange}
                                required
                            />
                            <br />
                            <Button
                                text="Inloggen"
                                buttonClass="button-login"
                                type="submit"
                            />
                        </form>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Login;
