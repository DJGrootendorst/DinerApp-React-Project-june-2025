import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';

function Search() {
    return (
        <Layout>
            <div>
                <h1>DinerApp Zoeken</h1>
                <p>Zoek gericht naar de beste recepten.</p>
            </div>
        </Layout>
    )
}

export default Search;