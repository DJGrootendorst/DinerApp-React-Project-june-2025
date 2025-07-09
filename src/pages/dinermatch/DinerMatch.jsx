import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout.jsx';
import FavoriteButton from '../../components/favoritebutton/FavoriteButton.jsx';
import RecipeSelection from '../../components/recipeselection/RecipeSelection.jsx';
import { Link, useSearchParams } from 'react-router-dom';
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
                            <div key={recipe.id} className="recept-kaart">
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="recept-afbeelding"
                                />
                                <h3>{recipe.title}</h3>
                                <FavoriteButton recipe={recipe} />
                                <Link to={`/app/recept/${recipe.id}`}>Bekijk recept</Link>
                            </div>
                        ))
                    ) : (
                        <p>Vul de vragen in en klik op zoeken.</p>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default DinerMatch;

