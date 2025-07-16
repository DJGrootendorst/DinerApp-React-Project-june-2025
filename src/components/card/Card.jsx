import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../../components/favoritebutton/FavoriteButton.jsx';
import './Card.css';

function Card({ recipe, onToggleFavorite }) {
    const { id, title, image } = recipe;

    return (
        <article className="card-container">
            <div className="image-wrapper">
                <Link to={`/app/recept/${id}`}>
                    <img src={image} alt={title} className="card-image"/>
                </Link>
            </div>

            <div className="card-bottom-row">
                <Link to={`/app/recept/${id}`} className="card-title-link">
                    <h3 className="card-title">{title}</h3>
                </Link>
                <FavoriteButton recipe={recipe} onToggle={onToggleFavorite}/>
            </div>
        </article>

    );
}

export default Card;