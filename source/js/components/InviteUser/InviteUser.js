import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PhoneInput from 'react-phone-number-input';

import Offer from '../../../assets/documents/offer.pdf';
import Confidentiality from '../../../assets/documents/confidentiality.pdf';

import apiClient from '../../api/apiClient';

import InviteUserStyled from './InviteUser.styled';

const InviteUser = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    const [recommenderSuggestions, setRecommenderSuggestions] = useState([]);
    const [sponsorSuggestions, setSponsorSuggestions] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            const { data } = await apiClient.get('/checker/users/');

            setUsers(data);
        };

        loadUsers();
    }, []);

    const [firstName, setFirstName] = useState('');

    const [lastName, setLastName] = useState('');

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const usernameHandler = async (e) => {
        e.preventDefault();

        apiClient
            .get(`checker/username?username=${e.target.value}`)
            .then((response) => {
                if (response.status === 200) {
                    setUsername(e.target.value);
                    setUsernameError('');
                }
            })
            .catch((error) => {
                setUsernameError('Такой пользователь уже существует');

                console.error(error);
            });
    };

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const emailHandler = async (e) => {
        e.preventDefault();

        apiClient
            .get(`checker/email?email=${e.target.value}`)
            .then((response) => {
                if (response.status === 200) {
                    setEmail(e.target.value);
                    setEmailError('');
                }
            })
            .catch((error) => {
                setEmailError('Пользователь с такой почтой уже существует');

                console.error(error);
            });
    };

    const [phoneNumber, setPhoneNumber] = useState();
    const [phoneNumberError, setPhoneNumberError] = useState('');

    useEffect(() => {
        apiClient
            .post(`checker/phonenumber`, {
                phone_number: phoneNumber,
            })
            .then((response) => {
                if (response.status === 200) {
                    setPhoneNumberError('');
                }
            })
            .catch((error) => {
                setPhoneNumberError(
                    'Пользователь с таким номером телефона уже существует'
                );

                console.error(error);
            });
    }, [phoneNumber]);

    const [address, setAddress] = useState('');

    const positionChecker = async (username) => {
        await apiClient.get(`checker/tree/${username}`).then((response) => {
            if (response.status === 200) {
                setLeftPosition(response.data.left);
                setRightPosition(response.data.right);
            }
        });
    };

    const [recommender, setRecommender] = useState('');

    const recommenderHandler = (username) => {
        setRecommender(username);

        let matches = [];

        if (username.length > 0) {
            matches = users.filter((user) => {
                const regex = new RegExp(`${username}`, 'gi');

                return user.username.match(regex);
            });
        }

        setRecommenderSuggestions(matches);
    };

    const onRecommenderClick = (username) => {
        setRecommender(username);

        setRecommenderSuggestions([]);
    };

    const [sponsor, setSponsor] = useState('');

    const sponsorHandler = (username) => {
        let matches = [];

        if (username.length > 0) {
            matches = users.filter((user) => {
                const regex = new RegExp(`${username}`, 'gi');

                return user.username.match(regex);
            });
        }

        positionChecker(username);

        setSponsorSuggestions(matches);
        setSponsor(username);
    };

    const onSponsorClick = (username) => {
        setSponsor(username);

        positionChecker(username);

        setSponsorSuggestions([]);
    };

    const [newUserPosition, setNewUserPosition] = useState('');

    const [leftPosition, setLeftPosition] = useState(true);
    const [rightPosition, setRightPosition] = useState(true);

    const [password, setPassword] = useState('');

    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [passwordConfirmationError, setPasswordConfirmationError] =
        useState('');

    const passwordConfirmationHandler = (e) => {
        setPasswordConfirmation(e.target.value);

        if (password !== e.target.value) {
            setPasswordConfirmationError('Пароли не совпадают');
        } else {
            setPasswordConfirmationError('');
        }
    };

    const handleSubmission = async (e) => {
        e.preventDefault();

        localStorage.setItem(
            'newUser',
            JSON.stringify({
                user: {
                    first_name: firstName,
                    last_name: lastName,
                    username,
                    email,
                    phone_number: phoneNumber,
                    address,
                    password,
                },
                recommender,
                sponsor,
                position: e.target.position.value,
                referral_code: {
                    price: Number(e.target.price.value),
                },
                address: e.target.pickup_city.value,
            })
        );

        localStorage.removeItem('orders');

        setTimeout(() => {
            localStorage.removeItem('newUser');
        }, 1000 * 60 * 15);

        navigate('/limitedStore');
    };

    return (
        <InviteUserStyled>
            <form className='form' onSubmit={handleSubmission}>
                <h2>Информация о пользователе</h2>

                <div className='input-container'>
                    <label className='label' htmlFor='first_name'>
                        Имя
                    </label>
                    <input
                        type='text'
                        id='first_name'
                        className='form-input'
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                        required
                    />
                </div>

                <div className='input-container'>
                    <label className='label' htmlFor='last_name'>
                        Фамилия
                    </label>
                    <input
                        type='text'
                        id='last_name'
                        className='form-input'
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                        required
                    />
                </div>

                <div className='input-container'>
                    <label className='label' htmlFor='username'>
                        Логин
                    </label>
                    <input
                        type='text'
                        id='username'
                        className='form-input'
                        onChange={(e) => {
                            usernameHandler(e);
                        }}
                        required
                    />
                    <p className={usernameError ? 'error-message' : 'hide'}>
                        {usernameError}
                    </p>
                </div>

                <div className='input-container'>
                    <label className='label' htmlFor='email'>
                        Электронная почта
                    </label>
                    <input
                        type='email'
                        id='email'
                        className='form-input'
                        onChange={(e) => {
                            emailHandler(e);
                        }}
                        required
                    />
                    <p className={emailError ? 'error-message' : 'hide'}>
                        {emailError}
                    </p>
                </div>

                <div className='phone-number-input-container'>
                    <label className='label'>Номер телефона</label>
                    <PhoneInput
                        international={true}
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                    />
                    <p className={phoneNumberError ? 'error-message' : 'hide'}>
                        {phoneNumberError}
                    </p>
                </div>

                <div className='input-container'>
                    <label className='label' htmlFor='address'>
                        Адрес
                    </label>
                    <input
                        type='text'
                        id='address'
                        className='form-input'
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                        required
                    />
                </div>

                <div className='input-container'>
                    <label className='label' htmlFor='price'>
                        Статус:
                    </label>
                    <select className='form-input' name='price' id='price'>
                        <option value='85'>85</option>
                        <option value='250'>250</option>
                        <option value='500'>500</option>
                        <option value='2000'>2000</option>
                    </select>
                </div>

                <div className='input-container'>
                    <label className='label' htmlFor='recommender'>
                        Рекомендатель
                    </label>
                    <input
                        type='text'
                        id='recommender'
                        className='form-input'
                        onChange={(e) => {
                            recommenderHandler(e.target.value);
                        }}
                        value={recommender}
                        required
                    />
                    {recommenderSuggestions.length > 0 &&
                        recommenderSuggestions.map((suggestion, index) => (
                            <div
                                className='suggestion'
                                key={index}
                                onClick={() => {
                                    onRecommenderClick(suggestion.username);
                                }}
                            >
                                {suggestion.username}
                            </div>
                        ))}
                </div>

                <div className='input-container'>
                    <label className='label' htmlFor='sponsor'>
                        Спонсор
                    </label>
                    <input
                        type='text'
                        id='sponsor'
                        className='form-input'
                        onChange={(e) => {
                            sponsorHandler(e.target.value);
                        }}
                        value={sponsor}
                        required
                    />
                    {sponsorSuggestions.length > 0 &&
                        sponsorSuggestions.map((suggestion, index) => (
                            <div
                                className='suggestion'
                                key={index}
                                onClick={() => {
                                    onSponsorClick(suggestion.username);
                                }}
                            >
                                {suggestion.username}
                            </div>
                        ))}
                </div>

                <div className='position'>
                    <label htmlFor='position'>Позиция в древе</label>
                    <div>
                        <input
                            type='radio'
                            id='left'
                            name='position'
                            value='left'
                            disabled={leftPosition ? true : false}
                            onChange={(e) => {
                                setNewUserPosition(e.target.value);
                            }}
                        />
                        <label htmlFor='left'>Слева</label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            id='right'
                            name='position'
                            value='right'
                            disabled={rightPosition ? true : false}
                            onChange={(e) => {
                                setNewUserPosition(e.target.value);
                            }}
                        />
                        <label htmlFor='right'>Справа</label>
                    </div>
                </div>

                <h2>Подтвердить заказ</h2>

                <div className='input-container'>
                    <label className='label' htmlFor='pickup_city'>
                        Город самовывоза
                    </label>
                    <select
                        className='form-input'
                        name='pickup_city'
                        id='pickup_city'
                    >
                        <option value='г. Кокшетау, ул. Ауэзова 208у'>
                            г. Кокшетау, ул. Ауэзова 208у
                        </option>
                        <option value='г. Нур-Султан, ул. Кабанбай батыра 46б'>
                            г. Нур-Султан, ул. Кабанбай батыра 46б
                        </option>
                    </select>
                </div>

                <div className='input-container'>
                    <label className='label' htmlFor='password'>
                        Пароль
                    </label>
                    <input
                        type='password'
                        id='password'
                        className='form-input'
                        autoComplete='off'
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>

                <div className='input-container'>
                    <label className='label' htmlFor='password_confirmation'>
                        Подтверждение пароля
                    </label>
                    <input
                        type='password'
                        id='password_confirmation'
                        autoComplete='off'
                        className='form-input'
                        onChange={(e) => {
                            passwordConfirmationHandler(e);
                        }}
                        required
                    />
                    <p
                        className={
                            passwordConfirmationError ? 'error-message' : 'hide'
                        }
                    >
                        {passwordConfirmationError}
                    </p>
                </div>

                {/*<div className='checkbox-container'>
                    <input type='checkbox' name='checkbox' required />
                    <a href={Offer} target='_blank'>
                        Публичная оферта
                    </a>
                </div>
                */}
                <div className='checkbox-container'>
                    <input type='checkbox' name='checkbox' required />
                    <a href={Confidentiality} target='_blank'>
                        Соглашение о конфиденциальности
                    </a>
                </div>

                <button
                    disabled={
                        usernameError ||
                            !newUserPosition ||
                            emailError ||
                            phoneNumberError ||
                            passwordConfirmationError
                            ? true
                            : false
                    }
                >
                    Следующий шаг
                </button>
            </form>
        </InviteUserStyled>
    );
};

export default InviteUser;
