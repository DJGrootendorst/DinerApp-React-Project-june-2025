import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button.jsx';
import preview from '../../assets/preview.png';
import Layout from '../../components/layout/Layout.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';
import '../../pages/homepage/HomePage.css';

function HomePage() {
    const navigate = useNavigate();
    const { isAuth, logout } = useContext(AuthContext);

    const handleRegisterClick = () => navigate('/Register');
    const handleLoginClick = () => navigate('/Login');
    const handleLogoutClick = () => {
        logout();
    };

    return (
        <Layout
            headerContent={
                <div className="home-header">
                    {isAuth ? (
                        <Button text="Uitloggen" buttonClass="button-logout" onClick={handleLogoutClick} />
                    ) : (
                        <>
                            <Button text="Inloggen" buttonClass="button-login" onClick={handleLoginClick} />
                            <Button text="Registreren" buttonClass="button-register" onClick={handleRegisterClick} />
                        </>
                    )}
                </div>
            }
        >
            <div className="home-content">
                <article className="introduction">
                    <h2>Welkom bij DinerApp!</h2>
                    <p>
                        Of je nu een gezellig diner plant met vrienden, een familiemaaltijd organiseert of simpelweg
                        niet
                        weet
                        wat je moet koken vandaag — DinerApp heeft de beste oplossing voor jouw maaltijdbehoeften.
                    </p>

                    <p>
                        DinerApp helpt je bij elke stap van het maken van de beste keuze voor jouw maaltijd. Het
                        begint
                        met
                        een paar eenvoudige vragen die je helpen de perfecte gerechten te vinden. Op basis van jouw
                        voorkeuren
                        en behoeften, selecteert DinerApp de beste recepten — speciaal voor jou!
                    </p>

                    <p>
                        Maar daar stopt het niet! DinerApp biedt tal van handige functies om jouw kookervaring nog
                        gemakkelijker te maken. Zo kun je:
                    </p>

                    <ul>
                        <li><strong>Zoeken naar gerechten op basis van je voorkeuren</strong>: Heb je specifieke
                            dieetwensen,
                            allergieën of bepaalde ingrediënten die je wel of niet wilt gebruiken? Geen probleem!
                            DinerApp
                            filtert recepten op basis van jouw voorkeuren en biedt alleen de beste suggesties die
                            bij
                            jouw
                            wensen passen.
                        </li>
                        <li><strong>Ontdek nieuwe gerechten</strong>: Laat je inspireren door de nieuwste recepten
                            en
                            culinaire trends, of kies voor een klassieke maaltijd. Wat je ook zoekt, DinerApp helpt
                            je
                            altijd
                            de juiste keuze te maken.
                        </li>
                        <li><strong>Opslaan van je favoriete recepten</strong>: Vind je een gerecht dat je keer op
                            keer
                            wilt
                            maken? Sla het op in je persoonlijke receptenset. Dit zorgt ervoor dat je altijd snel
                            bij
                            jouw
                            favoriete gerechten kunt komen, zonder tijd te verliezen met zoeken.
                        </li>
                    </ul>

                    <p>
                        Met DinerApp is koken eenvoudiger, sneller en leuker dan ooit. Het is de ideale partner voor
                        iedere
                        thuiskok, of je nu een beginnende kok bent of een doorgewinterde chef!
                    </p>
                </article>

                <article className="preview">
                    <img src={preview} alt="Preview"/>
                </article>
            </div>
        </Layout>
    )
}

export default HomePage;