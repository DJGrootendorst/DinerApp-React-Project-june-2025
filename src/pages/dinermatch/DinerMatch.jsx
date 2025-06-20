import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import RecipeSelection from '../../components/recipeselection/RecipeSelection.jsx';
import './DinerMatch.css'

function DinerMatch() {

    const [state, setState] = useState([]);

    async function getRecipes(){

    }
    return (
        <Layout>
            <div className='test'>
                <div className="dinermatch-container">
                    <RecipeSelection introText="Beantwoord de vragen en ontdek jouw maaltijdmatch!"/>
                </div>
                <h1>hoi</h1>
            </div>
        </Layout>
    )
}

export default DinerMatch;