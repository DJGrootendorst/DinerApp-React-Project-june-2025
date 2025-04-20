import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import Button from '../../components/button/Button.jsx';

function Register() {
    const navigate = useNavigate();

    return(
        <Layout headerContent={
            <div className="home-header">
                <Button text="Inloggen" buttonClass="button-login" onClick={() => navigate('/login')} />
                <Button text="Registreren" buttonClass="button-register" onClick={() => navigate('/register')} />
            </div>
        }>
            <div>
                    <main className="main">
                    <h1>DinerApp RegisterPage</h1>
                    <p>Welkom bij het registreren</p>
                    <Link to="/Login">Inloggen</Link>
                </main>

            </div>
        </Layout>
    )
}

export default Register;