import React from 'react';
import './Button.css';

function Button({ text, buttonClass, onClick, type = "button" }) {
    return (
        <button
            className={`button ${buttonClass}`}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;