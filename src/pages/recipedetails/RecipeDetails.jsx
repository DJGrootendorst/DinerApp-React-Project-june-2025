import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import axios from 'axios';

const API_KEY = 'aac25b9051c945c6ac35df61975b9dbf';

function RecipeDetails() {
    const { id } = useParams();
    const [recept, setRecept] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRecept() {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${id}/information`,
                    {
                        params: { apiKey: API_KEY },
                    }
                );
                setRecept(response.data);
            } catch (error) {
                console.error('Fout bij ophalen van recept:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchRecept();
    }, [id]);

    if (loading) {
        return <Layout><p>Bezig met laden...</p></Layout>;
    }

    if (!recept) {
        return <Layout><p>Recept niet gevonden.</p></Layout>;
    }

    return (
        <Layout>
            <h1>{recept.title}</h1>
            <img
                src={recept.image}
                alt={recept.title}
                style={{ maxWidth: '400px', height: 'auto' }}
            />

            <h2>Ingrediënten</h2>
            <ul>
                {recept.extendedIngredients.map(ingredient => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>

            <h2>Instructies</h2>
            {recept.instructions ? (
                <p dangerouslySetInnerHTML={{ __html: recept.instructions }} />
            ) : (
                <p>Geen instructies beschikbaar.</p>
            )}
        </Layout>
    );
}

export default RecipeDetails;
