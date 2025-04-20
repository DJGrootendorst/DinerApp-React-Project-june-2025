import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';

function MyRecipes() {
    return (
        <Layout>
            <div>
                <h1>DinerApp Mijn recepten</h1>
                <p>Blader door jouw favoriete recepten.</p>
            </div>
        </Layout>
    )
}

export default MyRecipes;