import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import Button from '../../components/button/Button.jsx';
import './Login.css';

function Login({ toggleIsLoggedIn }) {
    const navigate = useNavigate();

    const handleInlogClick = () => {
        toggleIsLoggedIn(true);         // Zet ingelogd op true
        navigate('/app/DinerMatch');    // Ga naar beschermde pagina
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
                        <p>Heb je nog geen account?<Link to="/Register"> Registreren</Link></p>

                        <form className="form-input">
                            <input
                                type="email"
                                id="email-field"
                                name="e-mail"
                                placeholder="E-mailadres"
                                required
                            />
                            <input
                                type="password"
                                id="password-field"
                                name="password"
                                placeholder="Wachtwoord"
                                required
                            />
                        </form>

                        <br/>
                        <Button text="Inloggen" buttonClass="button-login" onClick={handleInlogClick}>Inloggen</Button>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Login;
