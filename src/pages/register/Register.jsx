import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import Button from '../../components/button/Button.jsx';
import './Register.css';
import { AuthContext } from '../../context/AuthContext.jsx';

function Register() {
    const navigate = useNavigate();
    const { register } = useContext(AuthContext); // optioneel automatisch inloggen

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    async function handleRegister(e) {
        e.preventDefault();

        // simpele validatie
        if (formState.email !== formState.confirmEmail) {
            alert('E-mailadressen komen niet overeen');
            return;
        }
        if (formState.password !== formState.confirmPassword) {
            alert('Wachtwoorden komen niet overeen');
            return;
        }
        register(formState)
    }

    return (
        <Layout headerContent={
            <div className="home-header">
                <Button text="Inloggen" buttonClass="button-login" onClick={() => navigate('/login')} />
                <Button text="Registreren" buttonClass="button-register" onClick={() => navigate('/register')} />
            </div>
        }>
            <main className="register-main">
                <div className="form-register">
                    <div className="form-content">
                        <h1>REGISTREREN</h1>
                        <p>Heb je al een account? <Link to="/Login"> Inloggen</Link></p>

                        <form className="form-input" onSubmit={handleRegister}>
                            <input
                                type="text"
                                name="username"
                                placeholder="Gebruikersnaam"
                                value={formState.username}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mailadres"
                                value={formState.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="confirmEmail"
                                placeholder="Bevestig e-mailadres"
                                value={formState.confirmEmail}
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
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Bevestig wachtwoord"
                                value={formState.confirmPassword}
                                onChange={handleChange}
                                required
                            />

                            <Button
                                text="Registreren"
                                buttonClass="button-register"
                                type="submit"
                            />
                        </form>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Register;
