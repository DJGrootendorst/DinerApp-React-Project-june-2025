import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../../components/favoritebutton/FavoriteButton.jsx';
import './Card.css';

function Card({ recipe, onToggleFavorite }) {
    const { id, title, image } = recipe;

    return (
        <article className="card">
            <Link to={`/app/recept/${id}`} className="card-link-wrapper">
                <div className="image-wrapper">
                    <img src={image} alt={title} className="card-image"/>
                </div>
                <h3 className="card-title">{title}</h3>
            </Link>

            <FavoriteButton recipe={recipe} onToggle={onToggleFavorite}/>
        </article>
    );
}

export default Card;
