import React, { useState } from 'react';
import './RecipeSelection.css';

const questions = [
    {
        vraag: "Welk type maaltijd zoek je?",
        opties: ["Ontbijt", "Lunch", "Diner", "Snacks"]
    },
    {
        vraag: "Hoeveel tijd heb je om te koken?",
        opties: ["Minder dan 15 minuten", "15-30 minuten", "Meer dan 30 minuten"]
    },
    {
        vraag: "Wat is jouw voedingsdoel?",
        opties: ["Gewichtsverlies", "Spieropbouw", "Gezond eten", "Verbeteren van de spijsvertering"]
    },
    {
        vraag: "Volg je een specifiek dieet?",
        opties: ["Vegan", "Vegetarisch", "Pescatarian", "Keto", "Paleo", "Glutenvrij"]
    },
    {
        vraag: "Hoeveel calorieën mag de maaltijd hebben?",
        opties: ["Laag", "Gemiddeld", "Hoog"]
    },
    {
        vraag: "Heb je allergieën of intoleranties?",
        opties: ["Melk", "Eieren", "Gluten", "Pinda’s", "Soja", "Noten", "Vis", "Schaal- en schelpdieren", "Sulfieten"]
    }
];

const RecipeSelection = ({ introText }) => {
    const [antwoorden, setAntwoorden] = useState({});
    const [openSections, setOpenSections] = useState({});




    const handleChange = (vraag, optie) => {
        setAntwoorden(prev => {
            const huidige = prev[vraag] || [];
            const nieuw = huidige.includes(optie)
                ? huidige.filter(item => item !== optie)
                : [...huidige, optie];
            return { ...prev, [vraag]: nieuw };
        });
    };

    const toggleSection = (vraag) => {
        setOpenSections(prev => ({
            ...prev,
            [vraag]: !prev[vraag]
        }));
    };

    return (
        <div className="recipe-selection">
            {console.log(antwoorden, openSections)}
            <p>{introText}</p>
            <form className="recipe-selection-form">
                {questions.map((groep, index) => (
                    <div className="vraaggroep" key={index}>
                        <h3
                            className="vraag-titel"
                            onClick={() => toggleSection(groep.vraag)}
                        >
                            <span>{groep.vraag}</span>
                            <span className="dropdown-pijl">{openSections[groep.vraag] ? '▲' : '▼'}</span>
                        </h3>

                        {openSections[groep.vraag] && (
                            <div className="opties-lijst">
                                {groep.opties.map((optie, i) => (
                                    <label key={i} className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            value={optie}
                                            checked={antwoorden[groep.vraag]?.includes(optie) || false}
                                            onChange={() => handleChange(groep.vraag, optie)}
                                        />
                                        {optie}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </form>
        </div>
    );
};

export default RecipeSelection;
