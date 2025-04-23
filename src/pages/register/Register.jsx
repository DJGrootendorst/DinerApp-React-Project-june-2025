import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import Button from '../../components/button/Button.jsx';
import './Register.css';

function Register() {
    const navigate = useNavigate();

    return(
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
                        <p>Heb je al een account?<Link to="/Login"> Inloggen</Link></p>

                        <form className="form-input">
                            <input
                                type="email"
                                id="email-field"
                                name="e-mail"
                                placeholder="E-mailadres"
                                required
                            />
                            <input
                                type="email"
                                id="confirm-email-field"
                                name="confirm-e-mail"
                                placeholder="Bevestig je e-mailadres"
                                required
                            />
                            <input
                                type="password"
                                id="password-field"
                                name="password"
                                placeholder="Wachtwoord"
                                required
                            />
                            <input
                                type="password"
                                id="confirm-password-field"
                                name="confirm-password"
                                placeholder="Bevestig je wachtwoord"
                                required
                            />
                        </form>

                        <br/>

                        <Button
                            text="Registreren"
                            buttonClass="button-register"
                            onClick={() => console.log("Registratieknop geklikt")}
                        />

                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Register;