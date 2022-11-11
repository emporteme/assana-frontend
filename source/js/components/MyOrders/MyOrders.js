import { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { AuthContext } from '../../context/AuthContext';

import apiClient from '../../api/apiClient';

import MyOrdersStyled from './MyOrders.styled';

const ORDERS_URL = '/profile/orders/';

const Items = ({ currentItems }) => {
    const { tokens } = useContext(AuthContext);

    return (
        currentItems &&
        currentItems.length > 0 &&
        currentItems.map((order, index) => (
            <div key={index} className='order'>
                <table>
                    {tokens.role && tokens.role !== 'User' ? (
                        <>
                            <thead>
                                <tr>
                                    <th>Наименование</th>
                                    <th>Количество</th>
                                    <th>PV</th>
                                    <th>Всего</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.offers.map((offer, index) => (
                                    <tr key={index}>
                                        <td>
                                            {offer.product?.name} -{' '}
                                            {offer.option.name}
                                        </td>
                                        <td>{offer.count}</td>
                                        <td>{offer.option.pv * offer.count}</td>
                                        <td>
                                            {offer.option.price * offer.count}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </>
                    ) : (
                        <>
                            <thead>
                                <tr>
                                    <th>Наименование</th>
                                    <th>Количество</th>
                                    <th>PV</th>
                                    <th>Статус</th>
                                    <th>Всего</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.offers.map((offer, index) => (
                                    <tr key={index}>
                                        <td>
                                            {offer.product?.name} -{' '}
                                            {offer.option.name}
                                        </td>
                                        <td>{offer.count}</td>
                                        <td>{offer.option.pv * offer.count}</td>
                                        <td>{order.status}</td>
                                        <td>
                                            {offer.option.price * offer.count}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </>
                    )}
                </table>
                <div>
                    <p>
                        <span>Дата добавления:</span>{' '}
                        {order.created_at.slice(0, 10)}
                    </p>
                    <p>
                        <span>Покупатель:</span> {order.receiver}
                    </p>
                    <p>
                        <span>Адрес:</span> {order.address}
                    </p>

                    {tokens.role && tokens.role !== 'User' && (
                        <>
                            <br />
                            <div className='status-container'>
                                <label
                                    className='status-label'
                                    htmlFor='status'
                                >
                                    Статус заказа
                                </label>
                                <select
                                    className='status-select'
                                    name='status'
                                    id='status'
                                    defaultValue={order.status}
                                    onChange={(e) => {
                                        let status = e.target.value;

                                        apiClient.put(
                                            `/profile/orders/${order.id}`,
                                            {
                                                status,
                                            },
                                            {
                                                headers: {
                                                    Authorization: `Bearer ${tokens.access}`,
                                                },
                                            }
                                        );
                                    }}
                                >
                                    <option value='P'>В обработке</option>
                                    <option value='I'>В процессе</option>
                                    <option value='D'>Забрали</option>
                                    <option value='O'>Нет в наличии</option>
                                    <option value='R'>Отклонено</option>
                                </select>
                            </div>
                        </>
                    )}
                </div>
            </div>
        ))
    );
};

const PaginatedItems = ({ itemsPerPage, orders }) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(orders.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(orders.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % orders.length;
        setItemOffset(newOffset);
    };

    return (
        <div className='page-container'>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel='...'
                nextLabel='Следующая'
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel='Предыдущая'
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

const MyOrders = () => {
    const { tokens } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);

    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        setIsLoading(true);

        apiClient
            .get(ORDERS_URL, {
                headers: {
                    Authorization: `Bearer ${tokens.access}`,
                },
            })
            .then(({ data }) => {
                setOrders(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <MyOrdersStyled>
            {isLoading ? (
                <div>Загрузка...</div>
            ) : (
                <PaginatedItems itemsPerPage={3} orders={orders} />
            )}
        </MyOrdersStyled>
    );
};

export default MyOrders;
