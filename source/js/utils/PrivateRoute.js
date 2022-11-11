import { useContext, useEffect } from 'react';

import { AuthContext } from '../context/AuthContext';

import { useNavigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { tokens } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!tokens) {
            navigate('/login');
        }
    }, [navigate]);

    return children;
}
