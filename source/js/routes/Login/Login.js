import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import jwtDecode from 'jwt-decode';

import { AuthContext } from '../../context/AuthContext';

import apiClient from '../../api/apiClient';

import LoginStyled from './Login.styled';

export default function Login() {
    // constants
    const LOGIN_URL = '/auth/login/';

    // router hooks
    const navigate = useNavigate();

    // context hooks
    const { tokens, setTokens } = useContext(AuthContext);

    // state hooks
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    // navigate to home page if tokens are available
    if (tokens) {
        navigate('/');

        return '';
    }

    // handle login form submit
    const logInUser = (e) => {
        e.preventDefault();

        setIsLoading(true);

        apiClient
            .post(LOGIN_URL, {
                username,
                password,
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

                setIsLoading(false);

                navigate('/profile');
            })
            .catch((error) => {
                console.error(error);

                setErrorMessage('Неправильное имя пользователя или пароль');

                setTimeout(() => {
                    setErrorMessage('');
                }, 1000 * 5);
            });

        setIsLoading(false);
    };

    return (
        <LoginStyled>
            <div className='wrapper'>
                <h1 className='header'>Войти</h1>
                <p
                    className={
                        errorMessage ? 'error-message' : 'hidden-message'
                    }
                >
                    {errorMessage}
                </p>
                <form className='form' onSubmit={logInUser}>
                    <input
                        type='text'
                        id='username'
                        className='form-input'
                        autoComplete='off'
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        placeholder='Логин'
                        required
                    />
                    <input
                        type='password'
                        id='password'
                        className='form-input'
                        autoComplete='off'
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        placeholder='Пароль'
                        required
                    />
                    <Link to='/forget-password'>Забыли пароль?</Link>
                    <button>Войти</button>
                </form>
            </div>
        </LoginStyled>
    );
}
