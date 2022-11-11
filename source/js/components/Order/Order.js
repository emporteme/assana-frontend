import { useEffect, useState } from 'react';

import OrderStyled from './Order.styled';

export default function Order(props) {
    let orders = localStorage.getItem('orders')
        ? JSON.parse(localStorage.getItem('orders'))
        : [];

    const order = orders.find((order) => order.id === props.id);

    const [count, setCount] = useState(order.count);

    useEffect(() => {
        const totalPrice = orders.reduce((total, order) => {
            return total + order.price * order.count;
        }, 0);

        const totalBonus = orders.reduce((total, order) => {
            return total + order.pv * order.count;
        }, 0);

        props.totalPriceChanger(totalPrice);
        props.totalBonusChanger(totalBonus);

        if (count < 1) {
            orders = orders.filter((order) => order.id !== props.id);
            localStorage.setItem('orders', JSON.stringify(orders));
        }
    }, [count]);

    const handleClick = (method) => {
        if (method === '+') {
            setCount(count + 1);

            orders.forEach((order) => {
                if (order.id === props.id) {
                    order.count += 1;
                }
            });
        } else {
            setCount(count - 1);

            orders.forEach((order) => {
                if (order.id === props.id) {
                    order.count -= 1;
                }
            });
        }

        localStorage.setItem('orders', JSON.stringify(orders));
    };

    return (
        <OrderStyled image={props.image}>
            <div className='image-container'>
                <p className='bonus'>{props.pv * order.count} pv</p>
            </div>
            <div className='order-container'>
                <p className='order-naming'>
                    {props.name} - {props.size}
                </p>
                <div className='order-counter'>
                    <button onClick={() => handleClick('-')}>-</button>
                    <p>{count}</p>
                    <button onClick={() => handleClick('+')}>+</button>
                </div>
            </div>
        </OrderStyled>
    );
}
