import { useContext, useState } from 'react';

import { AuthContext } from '../../context/AuthContext';

import apiClient from '../../api/apiClient';

import ChangePasswordStyled from './ChangePassword.styled';

const ChangePassword = () => {
    const { tokens } = useContext(AuthContext);

    const [lastPassword, setLastPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handlePasswordUpdate = async (e) => {
        e.preventDefault();

        await apiClient
            .put(
                '/profile/password/',
                {
                    last_password: lastPassword,
                    new_password: newPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${tokens.access}`,
                    },
                }
            )
            .then((response) => {
                if (response.status === 200) {
                    setSuccessMessage('Пароль успешно изменен!');

                    e.target.last_password.value = '';
                    e.target.new_password.value = '';

                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 1000 * 5);
                }
            })
            .catch((error) => {
                setErrorMessage('Неправильный старый пароль!');

                setTimeout(() => {
                    setErrorMessage('');
                }, 1000 * 5);
            });
    };

    return (
        <ChangePasswordStyled>
            <p className={errorMessage ? 'error-message' : 'hide'}>
                {errorMessage}
            </p>
            <p className={successMessage ? 'success-message' : 'hide'}>
                {successMessage}
            </p>

            <form className='form' onSubmit={handlePasswordUpdate}>
                <div className='input-container'>
                    <label className='label' htmlFor='last_password'>
                        Старый пароль
                    </label>
                    <input
                        type='password'
                        id='last_password'
                        className='form-input'
                        autoComplete='off'
                        onChange={(e) => {
                            setLastPassword(e.target.value);
                        }}
                    />
                </div>
                <div className='input-container'>
                    <label className='label' htmlFor='new_password'>
                        Новый пароль
                    </label>
                    <input
                        type='password'
                        id='new_password'
                        className='form-input'
                        autoComplete='off'
                        onChange={(e) => {
                            setNewPassword(e.target.value);
                        }}
                    />
                </div>
                <button>Изменить пароль</button>
            </form>
        </ChangePasswordStyled>
    );
};

export default ChangePassword;
