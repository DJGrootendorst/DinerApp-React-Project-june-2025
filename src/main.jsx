import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext.jsx';
import { RecipeProvider } from './context/RecipeContext.jsx';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <RecipeProvider>
                    <App/>
                </RecipeProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>
);
