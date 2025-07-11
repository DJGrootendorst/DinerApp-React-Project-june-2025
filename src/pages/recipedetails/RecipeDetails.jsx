import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import RecipeDetailsCard from '../../components/card/RecipeDetailsCard.jsx';
import axios from 'axios';

const API_KEY = 'aac25b9051c945c6ac35df61975b9dbf';

function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function fetchRecipe() {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${id}/information`,
                    { params: { apiKey: API_KEY } }
                );
                setRecipe(response.data);
            } catch (error) {
                console.error('Fout bij ophalen recept:', error);
            }
        }

        fetchRecipe();
    }, [id]);

    if (!recipe) return <p>Bezig met laden...</p>;

    return (
        <Layout>
            <RecipeDetailsCard recipe={recipe} />
        </Layout>
    );
}

export default RecipeDetails;