import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import RecipeSelection from '../../components/recipeselection/RecipeSelection.jsx';
import { useSearchParams } from 'react-router-dom';

function MyRecipes() {
    const [favorites, setFavorites] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const stored = localStorage.getItem('favorites');
        if (stored) {
            const favs = JSON.parse(stored);
            setFavorites(favs);
            setFilteredRecipes(favs);  // Begin met alle favorieten tonen
        }
    }, []);

    const handleFilterResults = (results) => {
        // Omdat RecipeSelection bij mode="local" geen API-call doet,
        // kun je hier de antwoorden rechtstreeks oppakken uit 'results'
        const answers = results;

        let resultsList = [...favorites];

        if (answers["Welk type keuken wilt u koken?"]?.length) {
            resultsList = resultsList.filter(recipe =>
                answers["Welk type keuken wilt u koken?"].some(cuisine =>
                    recipe.cuisines?.includes(cuisine)
                )
            );
        }

        if (answers["Welk type dieet?"]?.length) {
            resultsList = resultsList.filter(recipe =>
                answers["Welk type dieet?"].some(diet =>
                    recipe.diets?.includes(diet.toLowerCase())
                )
            );
        }

        // Extra filters kun je hier toevoegen (intolerances, excludeCuisine, type, etc.)

        setFilteredRecipes(resultsList);
    };

    return (
        <Layout>
            <div className="dinermatch-container">
                <RecipeSelection
                    introText="Gebruik de vraagfunctie voor jouw recepten!"
                    onResults={handleFilterResults}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    mode="local"
                />
            </div>

            {filteredRecipes.length === 0 ? (
                <p>Voeg eerst favoriete recepten toe bij DinerMatch of bij Zoeken</p>
            ) : (
                <div className="recepten-lijst">
                    {filteredRecipes.map(recipe => (
                        <div key={recipe.id} className="recept-kaart">
                            <img src={recipe.image} alt={recipe.title} />
                            <h3>{recipe.title}</h3>
                            <Link to={`/app/recept/${recipe.id}`}>Bekijk recept</Link>
                        </div>
                    ))}
                </div>
            )}
        </Layout>
    );
}

export default MyRecipes;
