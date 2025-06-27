import React, { useState } from 'react';
import axios from 'axios';
import './RecipeSelection.css';

const API_KEY = 'aac25b9051c945c6ac35df61975b9dbf';

const questions = [
    {
        question: "Welk type keuken wilt u koken?",
        opties: ["Italian", "Greek", "Mexican", "Chinese", "Japanese", "Indian", "American", "French"]
    },
    {
        question: "Welk type keuken wilt u niet?",
        opties: ["Italian", "Greek", "Mexican", "Chinese", "Japanese", "Indian", "American", "French"]
    },
    {
        question: "Welk type dieet?",
        opties: ["Gluten Free", "Ketogenic", "Vegetarian", "Vegan", "Pescetarian", "Paleo"]
    },
    {
        question: "Met welke intoleranties wilt u rekening houden?",
        opties: ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood"]
    },
    {
        question: "Welk type gerecht wilt u bereiden?",
        opties: ["Main Course", "Side Dish", "Dessert", "Appetizer", "Bread", "Soup", "Snack"]
    }
];

const RecipeSelection = ({ introText, onResults, mode }) => {
    const [answers, setAnswers] = useState({});
    const [openSections, setOpenSections] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (question, option) => {
        setAnswers(prev => {
            const current = prev[question] || [];
            const updated = current.includes(option)
                ? current.filter(item => item !== option)
                : [...current, option];
            return { ...prev, [question]: updated };
        });
    };

    const toggleSection = (question) => {
        setOpenSections(prev => ({
            ...prev,
            [question]: !prev[question]
        }));
    };

    const handleSearch = async () => {
        if (mode !== 'api') return;

        setLoading(true);

        const params = {
            apiKey: API_KEY,
            number: 10
        };

        if (answers["Welk type keuken wilt u koken?"])
            params.cuisine = answers["Welk type keuken wilt u koken?"].join(',');

        if (answers["Welk type keuken wilt u niet?"])
            params.excludeCuisine = answers["Welk type keuken wilt u niet?"].join(',');

        if (answers["Welk type dieet?"])
            params.diet = answers["Welk type dieet?"].join(',');

        if (answers["Met welke intoleranties wilt u rekening houden?"])
            params.intolerances = answers["Met welke intoleranties wilt u rekening houden?"].join(',');

        if (answers["Welk type gerecht wilt u bereiden?"])
            params.type = answers["Welk type gerecht wilt u bereiden?"][0] || ''; // Max 1 gerecht type

        try {
            const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
                params
            });
            onResults(response.data.results || []);
        } catch (error) {
            console.error("Fout bij het ophalen van recepten:", error);
            onResults([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="recipe-selection">
            <p>{introText}</p>
            <form className="recipe-selection-form">
                {questions.map((group, index) => (
                    <div className="vraaggroep" key={index}>
                        <h3 className="vraag-titel" onClick={() => toggleSection(group.question)}>
                            <span>{group.question}</span>
                            <span className="dropdown-pijl">{openSections[group.question] ? '▲' : '▼'}</span>
                        </h3>

                        {openSections[group.question] && (
                            <div className="opties-lijst">
                                {group.opties.map((option, i) => (
                                    <label key={i} className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            value={option}
                                            checked={answers[group.question]?.includes(option) || false}
                                            onChange={() => handleChange(group.question, option)}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </form>

            <button onClick={handleSearch} disabled={loading}>
                {loading ? "Zoeken..." : "Zoek recepten"}
            </button>
        </div>
    );
};

export default RecipeSelection;
