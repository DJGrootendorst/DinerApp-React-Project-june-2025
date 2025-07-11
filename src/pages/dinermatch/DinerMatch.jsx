import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout.jsx';
import RecipeSelection from '../../components/recipeselection/RecipeSelection.jsx';
import Card from '../../components/card/Card.jsx';
import { useSearchParams } from 'react-router-dom';
import './DinerMatch.css';

function DinerMatch() {
    const [recipes, setRecipes] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    // Resultaten ophalen uit URL
    useEffect(() => {
        const savedRecipes = searchParams.get('savedRecipes')
        if (savedRecipes) {
            try {
                const parsed = JSON.parse(decodeURIComponent(savedRecipes));
                setRecipes(parsed);
            } catch (e) {
                console.error("Kan opgeslagen recepten niet parsen:", e);
            }
        }
    }, [searchParams]);

    // Functie om recepten op te slaan én URL te updaten
    const handleResults = (newRecipes) => {
        setRecipes(newRecipes);

        const encoded = encodeURIComponent(JSON.stringify(newRecipes));
        setSearchParams((prev) => {
            const updated = new URLSearchParams(prev);
            updated.set('savedRecipes', encoded);
            return updated;
        });
    };

    return (
        <Layout>
            <div className="dinermatch-container">
                <RecipeSelection
                    introText="Beantwoord de vragen en ontdek jouw maaltijdmatch!"
                    onResults={handleResults}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    mode="api"
                />

                <div className="recepten-lijst">
                    {recipes.length > 0 ? (
                        recipes.map((recipe) => (
                            <Card key={recipe.id} recipe={recipe}/>
                        ))
                    ) : (
                        <p>Geef antwoord op de vragen en klik op 'Zoek recepten'.</p>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default DinerMatch;

