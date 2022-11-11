import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../context/AuthContext';

import apiClient from '../../api/apiClient';

import ConfirmOrderWrapper from './ConfirmOrder.styled';

const ConfirmOrder = () => {
    const { tokens } = useContext(AuthContext);

    if (!tokens) {
        useEffect(() => {
            navigate('/login');
        }, []);

        return '';
    }

    const [profile, setProfile] = useState({});

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const orders = localStorage.getItem('orders')
        ? JSON.parse(localStorage.getItem('orders'))
        : [];

    const fetchProfile = async (e) => {
        const response = await apiClient('/profile', {
            headers: {
                Authorization: `Bearer ${tokens.access}`,
            },
        });

        if (response.status === 200) {
            const { data } = response;

            setProfile(data);
        }
    };

    const newUser = localStorage.getItem('newUser')
        ? JSON.parse(localStorage.getItem('newUser'))
        : false;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(newUser);

        if (newUser) {
            const addNewUser = async () => {
                apiClient
                    .post(
                        '/tree/add/',
                        {
                            ...newUser,
                            offers: orders.map((order) => {
                                return {
                                    product: order.id,
                                    option: order.option,
                                    color: 'Белый',
                                    count: order.count,
                                };
                            }),
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${tokens.access}`,
                            },
                        }
                    )
                    .then((response) => {
                        if (response.status === 201) {
                            setSuccessMessage(
                                'Ваш заказ успешно отправлен на обработку и добавлен новый пользователь!'
                            );

                            localStorage.removeItem('orders');
                            localStorage.removeItem('newUser');

                            setTimeout(() => {
                                setSuccessMessage('');

                                navigate('/');
                            }, 5000);
                        }
                    })
                    .catch((error) => {
                        setErrorMessage(
                            JSON.parse(error.request.response)[
                                'non_field_errors'
                            ][0]
                        );
                    });
            };

            addNewUser();
        } else {
            const performOrder = async (e) => {
                const formData = {
                    address: e.target.address.value,
                    offers: orders.map((order) => {
                        return {
                            product: order.id,
                            option: order.option,
                            color: 'Белый',
                            count: order.count,
                        };
                    }),
                    type: e.target.type.value,
                };

                apiClient
                    .post('/order/', formData, {
                        headers: {
                            Authorization: `Bearer ${tokens.access}`,
                        },
                    })
                    .then((response) => {
                        setSuccessMessage(
                            'Ваш заказ успешно отправлен на обработку!'
                        );

                        localStorage.removeItem('orders');
                        localStorage.removeItem('newUser');
                    })
                    .catch((error) => {
                        setErrorMessage(
                            JSON.parse(error.request.response)[
                                'non_field_errors'
                            ][0]
                        );

                        console.error(error);
                    });
            };

            performOrder(e);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalBonus, setTotalBonus] = useState(0);

    useEffect(() => {
        const calculateSum = () => {
            let total = 0;
            let bonus = 0;

            orders.forEach((order) => {
                total += order.count * order.price;
                bonus += order.count * order.pv;
            });

            setTotalPrice(total);
            setTotalBonus(bonus);
        };
        calculateSum();
    }, [orders]);

    return (
        <ConfirmOrderWrapper>
            {newUser ? (
                <div>
                    <h2>Данные нового пользователя</h2>
                    <br />
                    <p>
                        <b>Имя:</b> {newUser.user.first_name}
                    </p>
                    <p>
                        <b>Фамилия:</b> {newUser.user.last_name}
                    </p>
                    <p>
                        <b>Логин:</b> {newUser.user.username}
                    </p>
                    <p>
                        <b>Почта:</b> {newUser.user.email}
                    </p>
                    <p>
                        <b>Телефон:</b> {newUser.user.phone_number}
                    </p>
                    <br />
                    <p>
                        <b>Рекомендатель:</b> {newUser.recommender}
                    </p>
                    <p>
                        <b>Спонсор:</b> {newUser.sponsor}
                    </p>
                    <p>
                        <b>Позиция:</b>{' '}
                        {newUser.position === 'left' ? 'Слева' : 'Справа'}
                    </p>
                    <br />
                    <p>
                        <b>Точка самовывоза:</b> {newUser.address}
                    </p>
                    <br />
                    <h2>Ваш заказ</h2>
                    <p className={successMessage ? 'success-message' : 'hide'}>
                        {successMessage}
                    </p>
                    <p className={errorMessage ? 'error-message' : 'hide'}>
                        {errorMessage}
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th>Наименование</th>
                                <th>Количество</th>
                                <th>Цена</th>
                                <th>Бонусов</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{order.name}</td>
                                        <td>{order.count}</td>
                                        <td>{order.price * order.count} y.e</td>
                                        <td>{order.pv * order.count} pv</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <form onSubmit={handleSubmit}>
                        {!newUser && (
                            <>
                                <label htmlFor='address'>
                                    Выберите адрес самовывоза
                                </label>
                                <select name='address' id='address' required>
                                    <option value='г. Кокшетау, ул. Ауэзова 208у'>
                                        г. Кокшетау, ул. Ауэзова 208у
                                    </option>
                                    <option value='г. Нур-Султан, ул. Кабанбай батыра 46б'>
                                        г. Нур-Султан, ул. Кабанбай батыра 46б
                                    </option>
                                </select>
                                <br />
                            </>
                        )}
                        <br />
                        <p>Ваш баланс: {profile.balance} y.e</p>
                        <p>Ваш кэшбек: {profile.cashback} y.e</p>
                        <br />

                        <p>Бонусов: {totalBonus} pv</p>
                        <p>
                            <b>Итого: {totalPrice} y.e</b>
                        </p>

                        <input type='submit' value='Оплатить' />
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Ваш заказ</h2>
                    <p className={successMessage ? 'success-message' : 'hide'}>
                        {successMessage}
                    </p>
                    <p className={errorMessage ? 'error-message' : 'hide'}>
                        {errorMessage}
                    </p>
                    {orders.length > 0 && (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Наименование</th>
                                        <th>Количество</th>
                                        <th>Цена</th>
                                        <th>Бонусов</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{order.name}</td>
                                                <td>{order.count}</td>
                                                <td>
                                                    {order.price * order.count}{' '}
                                                    y.e
                                                </td>
                                                <td>
                                                    {order.pv * order.count} pv
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <br />
                            <form onSubmit={handleSubmit}>
                                {!newUser && (
                                    <>
                                        <p>Выберите адрес самовывоза</p>
                                        <select
                                            name='address'
                                            id='address'
                                            required
                                        >
                                            <option
                                                value='г. Кокшетау, ул. Ауэзова 208у'
                                                defaultChecked
                                            >
                                                г. Кокшетау, ул. Ауэзова 208у
                                            </option>
                                            <option value='г. Нур-Султан, ул. Кабанбай батыра 46б'>
                                                г. Нур-Султан, ул. Кабанбай
                                                батыра 46б
                                            </option>
                                        </select>
                                        <br />
                                        <br />
                                        <p>Выберите тип заказа</p>
                                        <select name='type' id='type' required>
                                            <option
                                                value='repeat-order'
                                                defaultChecked
                                            >
                                                Повторный заказ
                                            </option>
                                            <option value='upgrade'>
                                                Заказ-апгрейд (повышение уровня)
                                            </option>
                                        </select>
                                        <br />
                                    </>
                                )}
                                <br />
                                <p>Ваш баланс: {profile.balance} y.e</p>
                                <p>Ваш кэшбек: {profile.cashback} y.e</p>
                                <br />

                                <p>Бонусов: {totalBonus} pv</p>
                                <p>
                                    <b>Итого: {totalPrice} y.e</b>
                                </p>

                                <input type='submit' value='Оплатить' />
                            </form>
                        </>
                    )}
                </div>
            )}
        </ConfirmOrderWrapper>
    );
};

export default ConfirmOrder;
