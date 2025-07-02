import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout.jsx';
import RecipeSelection from '../../components/recipeselection/RecipeSelection.jsx';
import { RecipeContext } from '../../context/RecipeContext.jsx';
import { Link } from 'react-router-dom';
import './DinerMatch.css';

function DinerMatch() {
    const { recipes, setRecipes } = useContext(RecipeContext);

    return (
        <Layout>
            <div className="dinermatch-container">
                <RecipeSelection
                    introText="Beantwoord de vragen en ontdek jouw maaltijdmatch!"
                    onResults={setRecipes}
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

