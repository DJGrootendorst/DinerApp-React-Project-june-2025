import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import axios from 'axios';



const API_KEY = 'aac25b9051c945c6ac35df61975b9dbf';

function RecipeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        fetchRecipe();
        checkIfFavorite();
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

    function checkIfFavorite() {
        const stored = localStorage.getItem('favorites');
        if (stored) {
            const favorites = JSON.parse(stored);
            const found = favorites.find(r => r.id === parseInt(id));
            setFavorite(!!found);
        }
    }

    function toggleFavorite() {
        const stored = localStorage.getItem('favorites');
        const favorites = stored ? JSON.parse(stored) : [];

        const exists = favorites.find(r => r.id === recipe.id);
        let updatedFavorites;

        if (exists) {
            updatedFavorites = favorites.filter(r => r.id !== recipe.id);
            setFavorite(false);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            navigate(-1);
        } else {
            updatedFavorites = [...favorites, { id: recipe.id, title: recipe.title, image: recipe.image }];
            setFavorite(true);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    }

    if (!recipe) return <p>Bezig met laden...</p>;

    return (
        <Layout>
            <div>
                <h1>{recipe.title}</h1>
                <img src={recipe.image} alt={recipe.title}/>

                <button onClick={toggleFavorite}>
                    {favorite ? '❤️ Verwijder uit favorieten' : '🤍 Voeg toe aan favorieten'}
                </button>

                <h3>Beschrijving:</h3>
                <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
            </div>
        </Layout>
    );
}

export default RecipeDetails;
