import React, { useContext } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext.jsx';

import HomePage from './pages/homepage/HomePage.jsx';
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import DinerMatch from './pages/dinermatch/DinerMatch.jsx';
import Search from './pages/search/Search.jsx';
import MyRecipes from './pages/myrecipes/MyRecipes.jsx';
import RecipeDetails from './pages/recipedetails/RecipeDetails.jsx';
import TermsOfUse from './pages/legal/TermsOfUse.jsx';
import PrivacyPolicy from './pages/legal/PrivacyPolicy.jsx';

function App() {
    const { isAuth } = useContext(AuthContext);

    return (
        <main>
            <Routes>
                {/* Openbare routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />

                {/* Beschermde routes */}
                {isAuth ? (
                    <>
                        <Route path="/app/DinerMatch" element={<DinerMatch />} />
                        <Route path="/app/Search" element={<Search />} />
                        <Route path="/app/MyRecipes" element={<MyRecipes />} />
                        <Route path="app/recept/:id" element={<RecipeDetails />} />
                    </>
                ) : (
                    <Route path="/app/*" element={<Navigate to="/Login" />} />
                )}

                {/* Juridische pagina's */}
                <Route path="/terms" element={<TermsOfUse />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
        </main>
    );
}

export default App;
