import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import apiClient from '../../api/apiClient';

import Order from '../../components/Order';

import CartStyled from './Cart.styled';

export default function Card() {
    const navigate = useNavigate();

    const { tokens } = useContext(AuthContext);

    if (!tokens) {
        useEffect(() => {
            navigate('/login');
        }, []);

        return '';
    }

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalBonus, setTotalBonus] = useState(0);

    const [profile, setProfile] = useState({});

    const orders = localStorage.getItem('orders')
        ? JSON.parse(localStorage.getItem('orders'))
        : [];

    const newUser = localStorage.getItem('newUser')
        ? JSON.parse(localStorage.getItem('newUser'))
        : false;

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

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <CartStyled>
            <h1 className='cart-header'>Корзина</h1>
            <div className='cart-container'>
                {orders.length > 0 ? (
                    <>
                        <div className='orders-container'>
                            {orders.map((order) => (
                                <Order
                                    key={order.id}
                                    id={order.id}
                                    name={order.name}
                                    image={order.image}
                                    price={order.price}
                                    size={order.size}
                                    pv={order.pv}
                                    color={order.color}
                                    count={order.count}
                                    totalPriceChanger={setTotalPrice}
                                    totalBonusChanger={setTotalBonus}
                                />
                            ))}
                        </div>
                        <div className='orders-checkout'>
                            <div>
                                <div>
                                    <p>Ваш баланс: {profile?.balance} y.e</p>
                                    <p>Ваш кэшбек: {profile?.cashback} y.e</p>
                                </div>

                                <div>
                                    <p>Бонусов: {totalBonus} pv</p>
                                    <p>Итого: {totalPrice} y.e</p>
                                </div>

                                <button
                                    onClick={() => {
                                        navigate('/confirm-order');
                                    }}
                                >
                                    Перейти к оплате
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Ваша корзина пустая</p>
                )}
            </div>
        </CartStyled>
    );
}
