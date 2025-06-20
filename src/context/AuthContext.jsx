import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext({});

const API_BASE_URL = 'https://api.datavortex.nl/dinerappfrontend';
const API_KEY = 'dinerappfrontend:k3YQ5XfjlcqYE6FjnzQO';

function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            console.log(decoded)
            void fetchUserData(decoded.sub, token);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    async function register({ username, email, password }) {
        try {
            const response = await axios.post(`${API_BASE_URL}/users`, {
                username,
                email,
                password,
                info: "default info",
                authorities: [
                    { authority: "USER" }
                ]
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': API_KEY,
                }
            });
            console.log("Registratie gelukt:", response.data);
            // Optioneel: automatisch inloggen
            await login({ username, password });
        } catch (e) {
            console.error("Registratie mislukt:", e);
            alert("Registratie mislukt. Controleer je gegevens.");
        }
    }

    async function login(credentials) {
        console.log(credentials)
        try {
            const response = await axios.post(`${API_BASE_URL}/users/authenticate`, credentials, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': API_KEY,
                },
            });
            console.log(response)
            const token = response.data.jwt;
            localStorage.setItem('token', token);

            const decoded = jwtDecode(token);
            console.log(decoded);
            await fetchUserData(decoded.sub, token, '/app/DinerMatch');
        } catch (error) {
            console.error('Login mislukt:', error);
            alert('Inloggen mislukt. Controleer je gegevens.');
        }
    }

    async function fetchUserData(username, token, redirectUrl) {
        try {
            const result = await axios.get(`${API_BASE_URL}/users/${username}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'X-Api-Key': API_KEY,
                },
            });

            toggleIsAuth({
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            });

            if (redirectUrl) {
                navigate(redirectUrl);
            }
        } catch (error) {
            console.error('Gebruiker ophalen mislukt:', error);
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        navigate('/');
    }

    const contextData = {
        ...isAuth,
        login,
        logout,
        register,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
