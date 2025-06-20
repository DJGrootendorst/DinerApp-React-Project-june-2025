import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';

function Search() {

    const [searchText, setSearchText] = useState('');

    return (
        <Layout>
            {console.log(searchText)}
            <div>
                <h1>DinerApp Zoeken</h1>
                <p>Zoek gericht naar de beste recepten.</p>
                <label htmlFor="search">Search recipe:</label>
                <input type="text" id="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            </div>
        </Layout>
    )
}

export default Search;