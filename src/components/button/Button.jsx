import React from 'react';
import './Button.css';

function Button({ text, buttonClass, onClick, type = "button", disabled = false }) {
    return (
        <button
            className={`button ${buttonClass}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;