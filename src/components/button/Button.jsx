import React from 'react';
import './Button.css';


function Button({ text, buttonClass, onClick }) {
    return (
        <button
            className={`button ${buttonClass}`}
            type="button"
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;