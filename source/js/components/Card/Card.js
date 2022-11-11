import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

import CardWrapper from './Card.styled';

import TagIcon from '../../../assets/icons/tag.svg';

export default function Card(props) {
    const { tokens } = useContext(AuthContext);

    const clickHandler = () => {
        if (tokens) {
            const orders = localStorage.getItem('orders')
                ? JSON.parse(localStorage.getItem('orders'))
                : [];

            const newOrder = {
                id: props.id,
                name: props.name,
                image: props.image,
                size: props.size,
                color: props?.color,
                price: props.price,
                pv: props.pv,
                option: props.options.id,
                count: 1,
            };

            const existingOrder = orders.find((order) => {
                return order.id === newOrder.id;
            });

            if (existingOrder) {
                existingOrder.count++;
            } else {
                orders.push(newOrder);
            }

            localStorage.setItem('orders', JSON.stringify(orders));
        }
    };

    return (
        <CardWrapper image={props.image}>
            <div className='image-container'></div>
            <div className='information'>
                <p>
                    {props.name} - {props.size}
                </p>
                <div className='details'>
                    <h3>${props.price}</h3>
                    <button onClick={clickHandler}>В корзину</button>
                </div>
            </div>
            <div className='bonus'>
                <img src={TagIcon} alt='Tag icon' />
                <span>{props.pv}pv</span>
            </div>
        </CardWrapper>
    );
}
