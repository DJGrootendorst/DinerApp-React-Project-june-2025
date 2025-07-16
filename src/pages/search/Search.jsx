import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout.jsx';
import Card from '../../components/card/Card.jsx';
import './Search.css';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

function Search() {
    const [searchText, setSearchText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    // Zoekterm ophalen uit URL bij laden van de pagina
    useEffect(() => {
        const savedQuery = searchParams.get('q');
        if (savedQuery) {
            setSearchText(savedQuery);
        }
    }, []);

    // Suggesties ophalen zodra de zoekterm verandert
    useEffect(() => {
        if (searchText.length > 1) {
            fetchSuggestions();
            // Zet zoekterm direct in de URL
            setSearchParams({q: searchText });
        } else {
            setSuggestions([]);
            setSearchParams({});
        }
    }, [searchText]);

    async function fetchSuggestions() {
        try {
            const result = await axios.get('https://api.spoonacular.com/recipes/autocomplete', {
                params: {
                    query: searchText,
                    number: 10,
                    apiKey: API_KEY
                }
            });
            setSuggestions(result.data);
        } catch (e) {
            console.error('Fout bij het ophalen van suggesties:', e);
        }
    }

    return (
        <Layout>
            <div className="search-container">
                <div className="search-box">
                    <input
                        type="text"
                        id="search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Typ een receptnaam of ingrediënt."
                    />
                </div>


                {suggestions.length > 0 && (
                    <div className="recepten-lijst">
                        {suggestions.map((item) => {
                            const recipe = {
                                id: item.id,
                                title: item.title,
                                image: `https://spoonacular.com/recipeImages/${item.id}-636x393.${item.imageType}`,
                                cuisines: [],
                                diets: [],
                            };

                            return <Card key={item.id} recipe={recipe}/>;
                        })}
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default Search;
