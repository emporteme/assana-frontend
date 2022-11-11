import { createContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

import apiClient from '../api/apiClient';

import jwtDecode from 'jwt-decode';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [tokens, setTokens] = useState(
        localStorage.getItem('tokens')
            ? JSON.parse(localStorage.getItem('tokens'))
            : null
    );

    const updateTokens = async () => {
        await apiClient
            .post('/auth/token/refresh/', {
                refresh: tokens.refresh,
            })
            .then((response) => {
                const role = jwtDecode(response.data.access).role;

                setTokens({
                    access: response.data.access,
                    refresh: response.data.refresh,
                    role: role,
                });

                localStorage.setItem(
                    'tokens',
                    JSON.stringify({
                        access: response.data.access,
                        refresh: response.data.refresh,
                        role: role,
                    })
                );
            })
            .catch((error) => {
                console.error(error);

                setTokens(null);

                localStorage.removeItem('tokens');
                localStorage.removeItem('orders');
                localStorage.removeItem('newUser');

                navigate('/');
            });
    };

    useEffect(() => {
        let interval = setInterval(() => {
            updateTokens();
        }, 1000 * 60 * 15);

        return () => {
            clearInterval(interval);
        };
    }, [tokens, navigate]);

    const contextData = useMemo(
        () => ({ tokens, setTokens }),
        [tokens, setTokens]
    );

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};
