import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecipeSelection.css';

const API_KEY = 'aac25b9051c945c6ac35df61975b9dbf';

const questions = [
    {
        question: "Welk type keuken wilt u koken?",
        param: "cuisine",
        opties: ["Italian", "Greek", "Mexican", "Chinese", "Japanese", "Indian", "American", "French"]
    },
    {
        question: "Welk type keuken wilt u niet?",
        param: "excludeCuisine",
        opties: ["Italian", "Greek", "Mexican", "Chinese", "Japanese", "Indian", "American", "French"]
    },
    {
        question: "Welk type dieet?",
        param: "diet",
        opties: ["Gluten Free", "Ketogenic", "Vegetarian", "Vegan", "Pescetarian", "Paleo"]
    },
    {
        question: "Met welke intoleranties wilt u rekening houden?",
        param: "intolerances",
        opties: ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood"]
    },
    {
        question: "Welk type gerecht wilt u bereiden?",
        param: "type",
        opties: ["Main Course", "Side Dish", "Dessert", "Appetizer", "Bread", "Soup", "Snack"]
    }
];

const RecipeSelection = ({ introText, onResults, searchParams, setSearchParams, mode }) => {
    const [answers, setAnswers] = useState({});
    const [openSections, setOpenSections] = useState({});
    const [loading, setLoading] = useState(false);


    // Bij laden ophalen welke secties open stonden:
    useEffect(() => {
        const open = searchParams.get('openSections');
        if (open) {
            try {
                const parsed = JSON.parse(decodeURIComponent(open));
                setOpenSections(parsed);
            } catch (e) {
                console.error("Kan openSections niet parsen:", e);
            }
        }

        const savedAnswers = searchParams.get('filters');
        if (savedAnswers) {
            try {
                const parsed = JSON.parse(decodeURIComponent(savedAnswers));
                setAnswers(parsed);
            } catch (e) {
                console.error("Kan filters niet parsen:", e);
            }
        }
    }, [searchParams]);

    // Filters uit de URL ophalen bij laden van component
    useEffect(() => {
        const initialAnswers = {};
        questions.forEach(q => {
            const paramValue = searchParams.get(q.param);
            if (paramValue) {
                initialAnswers[q.question] = paramValue.split(',');
            }
        });
        setAnswers(initialAnswers);
    }, [searchParams]);

    const handleChange = (question, option, param) => {
        setAnswers(prev => {
            const current = prev[question] || [];
            const updated = current.includes(option)
                ? current.filter(item => item !== option)
                : [...current, option];

            // Update URL
            setSearchParams(prevParams => {
                const updatedParams = new URLSearchParams(prevParams);
                if (updated.length > 0) {
                    updatedParams.set(param, updated.join(','));
                } else {
                    updatedParams.delete(param);
                }
                return updatedParams;
            });

            return { ...prev, [question]: updated };
        });
    };

    const toggleSection = (question) => {
        setOpenSections(prev => {
            const updated = { ...prev, [question]: !prev[question] };

            const encoded = encodeURIComponent(JSON.stringify(updated));
            setSearchParams((prevParams) => {
                const updatedParams = new URLSearchParams(prevParams);
                updatedParams.set('openSections', encoded);
                return updatedParams;
            });

            return updated;
        });
    };

    const handleSearch = async () => {
        if (mode === 'local') {
            onResults(answers);
            return;
        }

        setLoading(true);

        const params = {
            apiKey: API_KEY,
            number: 10
        };

        questions.forEach(q => {
            const selected = answers[q.question];
            if (selected && selected.length > 0) {
                if (q.param === 'type') {
                    params[q.param] = selected[0]; // type max 1
                } else {
                    params[q.param] = selected.join(',');
                }
            }
        });

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
                                            onChange={() => handleChange(group.question, option, group.param)}
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