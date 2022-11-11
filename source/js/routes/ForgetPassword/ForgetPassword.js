import { useEffect, useState } from 'react';

import apiClient from '../../api/apiClient';

import ForgetPasswordStyled from './ForgetPassword.styled';

const ForgetPassword = () => {
    const [username, setUsername] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const resetPasswordHandler = async (e) => {
        e.preventDefault();

        apiClient
            .post('/auth/password/reset/', {
                username,
            })
            .then((response) => {
                if (response.status === 201) {
                    setSuccessMessage(
                        'На вашу почту отправлено письмо с инструкциями по восстановлению пароля'
                    );

                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 5000);
                }
            })
            .catch((error) => {
                setErrorMessage('Пользователь с таким именем не найден');

                console.error(error);

                setTimeout(() => {
                    setErrorMessage('');
                }, 5000);
            });
    };

    return (
        <ForgetPasswordStyled>
            <div className='container'>
                <p></p>
                <h1>Восстановить пароль</h1>
                <p className={errorMessage ? 'error-message' : 'hide'}>
                    {errorMessage}
                </p>
                <p className={successMessage ? 'success-message' : 'hide'}>
                    {successMessage}
                </p>
                <form
                    className='forget-password-form'
                    onSubmit={resetPasswordHandler}
                >
                    <input
                        type='text'
                        name='username'
                        placeholder='Логин'
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        required
                    />
                    <button>Восстановить пароль</button>
                </form>
            </div>
        </ForgetPasswordStyled>
    );
};

export default ForgetPassword;
