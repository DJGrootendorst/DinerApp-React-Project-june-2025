import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import RecipeSelection from '../../components/recipeselection/RecipeSelection.jsx';
import FavoriteButton from '../../components/favoritebutton/FavoriteButton.jsx';
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
            setFilteredRecipes(favs);  // Toon eerst alle favorieten
        }
    }, []);

    const handleFilterResults = (answers) => {
        // Kopie van favorites
        let resultsList = [...favorites];

        // Filter op cuisine (keuken)
        if (answers["Welk type keuken wilt u koken?"]?.length) {
            resultsList = resultsList.filter(recipe =>
                answers["Welk type keuken wilt u koken?"].some(cuisine =>
                    recipe.cuisines?.includes(cuisine)
                )
            );
        }

        // Filter op excludeCuisine (keuken uitsluiten)
        if (answers["Welk type keuken wilt u niet?"]?.length) {
            resultsList = resultsList.filter(recipe =>
                !answers["Welk type keuken wilt u niet?"].some(excludeCuisine =>
                    recipe.cuisines?.includes(excludeCuisine)
                )
            );
        }

        // Filter op dieet
        if (answers["Welk type dieet?"]?.length) {
            resultsList = resultsList.filter(recipe =>
                answers["Welk type dieet?"].some(diet =>
                    recipe.diets?.includes(diet.toLowerCase())
                )
            );
        }

        // Filter op intolerances (intoleranties)
        if (answers["Met welke intoleranties wilt u rekening houden?"]?.length) {
            resultsList = resultsList.filter(recipe => {
                const intolerances = answers["Met welke intoleranties wilt u rekening houden?"];
                // Controleer of geen van de intoleranties in het recept voorkomen
                return intolerances.every(intol => !(recipe.intolerances || []).includes(intol.toLowerCase()));
            });
        }

        // Filter op type gerecht
        if (answers["Welk type gerecht wilt u bereiden?"]?.length) {
            resultsList = resultsList.filter(recipe =>
                answers["Welk type gerecht wilt u bereiden?"].some(type =>
                    recipe.dishTypes?.includes(type.toLowerCase())
                )
            );
        }

        setFilteredRecipes(resultsList);
    };

    return (
        <Layout>
            <div className="dinermatch-container">
                <RecipeSelection
                    introText="Gebruik de vraagfunctie voor jouw favoriete recepten!"
                    onResults={handleFilterResults}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    mode="local"
                />
            </div>

            {filteredRecipes.length === 0 ? (
                <p>Voeg eerst favoriete recepten toe bij DinerMatch of bij Zoeken.</p>
            ) : (
                <div className="recepten-lijst">
                    {filteredRecipes.map(recipe => (
                        <div key={recipe.id} className="recept-kaart">
                            <img src={recipe.image} alt={recipe.title} />
                            <h3>{recipe.title}</h3>
                            <Link to={`/app/recept/${recipe.id}`}>Bekijk recept</Link>

                            <FavoriteButton
                                recipe={recipe}
                                onToggle={() => {
                                    // Favorieten opnieuw ophalen vanuit localStorage en filter bijwerken
                                    const stored = localStorage.getItem('favorites');
                                    const favs = stored ? JSON.parse(stored) : [];
                                    setFavorites(favs);
                                    setFilteredRecipes(favs);
                                }}
                            />
                        </div>
                    ))}
                </div>
            )}
        </Layout>
    );
}

export default MyRecipes;
