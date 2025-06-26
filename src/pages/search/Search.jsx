import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import axios from 'axios';

const API_KEY = 'aac25b9051c945c6ac35df61975b9dbf';

function Search() {
    const [searchText, setSearchText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (searchText.length > 1) {
            fetchSuggestions();
        } else {
            setSuggestions([]);
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
            <div>
                <h1>DinerApp Zoeken</h1>
                <p>Zoek gericht naar de beste recepten.</p>

                <label htmlFor="search">Search recipe:</label>
                <input
                    type="text"
                    id="search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Typ een receptnaam..."
                />

                {suggestions.length > 0 && (
                    <ul>
                        {suggestions.map((item) => (
                            <li key={item.id}>
                                <img
                                    src={`https://spoonacular.com/recipeImages/${item.id}-90x90.${item.imageType}`}
                                    alt={item.title}
                                    style={{ width: '80px', height: '80px', marginRight: '10px' }}
                                />
                                <Link to={`/app/recept/${item.id}`}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Layout>
    );
}

export default Search;
