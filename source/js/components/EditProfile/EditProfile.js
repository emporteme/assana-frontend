import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../context/AuthContext';

import apiClient from '../../api/apiClient';

import EditProfileStyled from './EditProfile.styled';

const EditProfile = ({ profile, setProfile }) => {
    // constants
    const PROFILE_URL = '/profile/';

    // context hooks
    const { tokens } = useContext(AuthContext);

    // form data states
    const [phoneNumber, setPhoneNumber] = useState(profile.phone_number);
    const [email, setEmail] = useState(profile.email);
    const [profileImage, setProfileImage] = useState(null);

    // message states
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // handle form data changes
    const handleClick = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append('email', email);
        formData.append('phone_number', phoneNumber);

        if (profileImage) {
            formData.append('image', profileImage);
        }

        apiClient
            .put(PROFILE_URL, formData, {
                headers: {
                    Authorization: `Bearer ${tokens.access}`,
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    setSuccessMessage('Данные успешно обновлены!');

                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 5000);
                }
            })
            .catch((error) => {
                setErrorMessage('Ошибка обновления данных');

                console.error(error);

                setTimeout(() => {
                    setErrorMessage('');
                }, 5000);
            });

        setProfile(profile);
    };

    return (
        <EditProfileStyled>
            <p
                className={
                    successMessage ? 'success-message' : 'hidden-message'
                }
            >
                {successMessage}
            </p>
            <p className={errorMessage ? 'error-message' : 'hidden-message'}>
                {errorMessage}
            </p>
            <form className='form' onSubmit={handleClick}>
                <div className='input-container'>
                    <label className='label' htmlFor='phone_number'>
                        Номер телефона
                    </label>
                    <input
                        type='text'
                        id='phone_number'
                        className='form-input'
                        autoComplete='off'
                        defaultValue={profile.phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className='input-container'>
                    <label className='label' htmlFor='email'>
                        Почтовый адрес
                    </label>
                    <input
                        type='text'
                        id='email'
                        className='form-input'
                        autoComplete='off'
                        defaultValue={profile.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='input-container'>
                    <label className='label' htmlFor='image'>
                        Фотография профиля
                    </label>
                    <input
                        type='file'
                        id='image'
                        className='form-input'
                        accept='image/png, image/jpeg'
                        onChange={(e) => {
                            setProfileImage(e.target.files[0]);
                        }}
                    />
                </div>
                <button>Изменить</button>
            </form>
        </EditProfileStyled>
    );
};

export default EditProfile;
