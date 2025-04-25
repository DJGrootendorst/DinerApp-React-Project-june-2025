import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import RecipeSelection from '../../components/recipeselection/RecipeSelection.jsx';

function MyRecipes() {
    return (
        <Layout>
            <div className="dinermatch-container">
                <RecipeSelection introText="Gebruik de vraagfunctie voor jouw recepten!"/>
            </div>
        </Layout>
    )
}

export default MyRecipes;