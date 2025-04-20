import React from 'react';
import Layout from '../../components/layout/Layout.jsx';

function PrivacyPolicy() {
    return (
        <Layout>
            <main className="main">
                <h1>Privacyverklaring - DinerApp</h1>
                <p><em>Laatst bijgewerkt: 14 april 2025</em></p>

                <section>
                    <h2>1. Jouw privacy, onze zorg</h2>
                    <p>
                        Bij DinerApp nemen we jouw privacy serieus. We verzamelen alleen de gegevens die nodig zijn om jou de beste recepten aan te bieden — niets meer, niets minder. Geen verborgen agenda’s, geen verrassingen.
                    </p>
                </section>

                <section>
                    <h2>2. Welke gegevens verzamelen we?</h2>
                    <p>Om je persoonlijke maaltijdsuggesties te kunnen geven, verzamelen we tijdelijk de volgende informatie:</p>
                    <ul>
                        <li>De antwoorden die je geeft op onze vragen (bijv. wat je lekker vindt, dieetvoorkeuren, kooktijd, etc.).</li>
                        <li>Technische informatie zoals je browser of apparaattype (voor verbetering van de gebruikerservaring).</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Wat doen we met die informatie?</h2>
                    <p>
                        Simpel: we gebruiken jouw antwoorden om recepten te matchen die bij jou passen. Je data wordt alleen gebruikt binnen de app en niet gedeeld met derden, tenzij je daar expliciet toestemming voor geeft.
                    </p>
                </section>

                <section>
                    <h2>4. Hoe lang bewaren we je gegevens?</h2>
                    <p>
                        Jouw gegevens worden alleen tijdelijk opgeslagen, zolang dat nodig is om jouw sessie te voltooien. We bewaren niets permanent, tenzij jij daar zelf expliciet voor kiest (bijvoorbeeld via een account, als dat in de toekomst beschikbaar komt).
                    </p>
                </section>

                <section>
                    <h2>5. Beveiliging</h2>
                    <p>
                        We nemen passende technische maatregelen om je gegevens te beschermen.
                    </p>
                </section>

                <section>
                    <h2>6. Je rechten</h2>
                    <p>Je hebt altijd het recht om:</p>
                    <ul>
                        <li>In te zien welke gegevens we (tijdelijk) van je hebben.</li>
                        <li>Deze gegevens aan te passen of te laten verwijderen.</li>
                        <li>Contact met ons op te nemen als je vragen hebt over je privacy.</li>
                    </ul>
                </section>

                <section>
                    <h2>7. Contact</h2>
                    <p>
                        Heb je vragen over deze privacyverklaring? Mail ons op <a href="mailto:privacy@dinerapp.nl">privacy@dinerapp.nl</a> en we helpen je graag verder.
                    </p>
                </section>

                <p>Bedankt voor je vertrouwen in DinerApp 💚</p>
            </main>
        </Layout>
    );
}

export default PrivacyPolicy;
