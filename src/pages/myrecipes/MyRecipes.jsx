import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout.jsx';
import './MyRecipes.css';
import Card from '../../components/card/Card.jsx';

function MyRecipes() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('favorites');
        if (stored) {
            const favs = JSON.parse(stored);
            setFavorites(favs);
        }
    }, []);

    return (
        <Layout>
            {favorites.length === 0 ? (
                <p>Voeg eerst favoriete recepten toe bij DinerMatch of bij Zoeken.</p>
            ) : (
                <div className="recepten-lijst">
                    {favorites.map(recipe => (
                        <Card
                            key={recipe.id}
                            recipe={recipe}
                            onToggleFavorite={() => {
                                const stored = localStorage.getItem('favorites');
                                const favs = stored ? JSON.parse(stored) : [];
                                setFavorites(favs);
                            }}
                        />
                    ))}
                </div>
            )}
        </Layout>
    );
}

export default MyRecipes;