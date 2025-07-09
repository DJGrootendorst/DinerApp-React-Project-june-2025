import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FavoriteButton({ recipe, onToggle, navigateBackOnRemove = false }) {
    const [favorite, setFavorite] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem('favorites');
        if (stored) {
            const favorites = JSON.parse(stored);
            const found = favorites.find(r => r.id === recipe.id);
            setFavorite(!!found);
        } else {
            setFavorite(false);
        }
    }, [recipe.id]);

    const toggleFavorite = () => {
        const stored = localStorage.getItem('favorites');
        const favorites = stored ? JSON.parse(stored) : [];

        const exists = favorites.find(r => r.id === recipe.id);
        let updatedFavorites;

        if (exists) {
            updatedFavorites = favorites.filter(r => r.id !== recipe.id);
            setFavorite(false);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

            if (navigateBackOnRemove) {
                navigate(-1);
            }
        } else {
            updatedFavorites = [...favorites, {
                id: recipe.id,
                title: recipe.title,
                image: recipe.image,
                cuisines: recipe.cuisines || [],
                diets: recipe.diets || []
            }];
            setFavorite(true);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }

        if (onToggle) {
            onToggle();
        }
    };

    return (
        <button onClick={toggleFavorite}>
            {favorite ? '❤️ Verwijder uit favorieten' : '🤍 Voeg toe aan favorieten'}
        </button>
    );
}

export default FavoriteButton;
