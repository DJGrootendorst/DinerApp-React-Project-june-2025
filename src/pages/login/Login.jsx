import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import Button from '../../components/button/Button.jsx';

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
            <div>
                <h1>DinerApp Login</h1>
                <p>Welkom bij het inloggen</p>
                <Link to="/Register">Registreren</Link>
                <br/>
                <Button text="Inloggen" buttonClass="button-login" onClick={handleInlogClick}>Inloggen</Button>
            </div>
        </Layout>
    );
}

export default Login;
