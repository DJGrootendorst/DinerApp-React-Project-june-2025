import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import FavoriteButton from '../../components/favoritebutton/FavoriteButton.jsx';
import axios from 'axios';

const API_KEY = 'aac25b9051c945c6ac35df61975b9dbf';

function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetchRecipe();
    }, [id]);

    async function fetchRecipe() {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
                params: { apiKey: API_KEY }
            });
            setRecipe(response.data);
        } catch (error) {
            console.error('Fout bij ophalen recept:', error);
        }
    }

    if (!recipe) return <p>Bezig met laden...</p>;

    return (
        <Layout>
            <div>
                <h1>{recipe.title}</h1>
                <img src={recipe.image} alt={recipe.title}/>

                <FavoriteButton recipe={{
                    id: recipe.id,
                    title: recipe.title,
                    image: recipe.image,
                    cuisines: recipe.cuisines,
                    diets: recipe.diets
                }}
                navigateBackOnRemove={true}
                />

                <h3>Beschrijving:</h3>
                <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
            </div>
        </Layout>
    );
}

export default RecipeDetails;