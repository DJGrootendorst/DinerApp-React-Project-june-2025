import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import RecipeSelection from '../../components/recipeselection/RecipeSelection.jsx';

function DinerMatch() {
    return(
        <Layout>
            <div className="dinermatch-container">
                <RecipeSelection introText="Beantwoord de vragen en ontdek jouw maaltijdmatch!"/>
            </div>
        </Layout>
    )
}

export default DinerMatch;