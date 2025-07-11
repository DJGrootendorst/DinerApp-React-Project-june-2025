import React from 'react';
import FavoriteButton from '../favoritebutton/FavoriteButton';
import './RecipeDetailsCard.css';

function RecipeDetailsCard({ recipe }) {
    return (
        <div className="details-wrapper">
            {/* Card 1: Afbeelding, Titel, Favorite */}
            <article className="details-card">
                <img src={recipe.image} alt={recipe.title} className="details-image" />
                <h2 className="details-title">{recipe.title}</h2>
                <FavoriteButton
                    recipe={{
                        id: recipe.id,
                        title: recipe.title,
                        image: recipe.image,
                        cuisines: recipe.cuisines,
                        diets: recipe.diets
                    }}
                    navigateBackOnRemove={true}
                />
            </article>

            {/* Card 2: Beschrijving */}
            <article className="details-card">
                <h3 className="details-subtitle">Beschrijving</h3>
                <p
                    className="details-description"
                    dangerouslySetInnerHTML={{ __html: recipe.summary }}
                />
            </article>
        </div>
    );
}

export default RecipeDetailsCard;
