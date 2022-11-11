import { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { AuthContext } from '../../context/AuthContext';

import apiClient from '../../api/apiClient';

import TransactionsStyled from './Transactions.styled';

import MoneyIcon from '../../../assets/icons/money.svg';

const Items = ({ currentItems }) => {
    const { tokens } = useContext(AuthContext);

    return (
        <>
            {tokens.role && tokens.role !== 'User' ? (
                <>
                    <thead>
                        <tr>
                            <th>Отправитель</th>
                            <th>Сумма</th>
                            <th>Статус</th>
                            <th>Дата транзакции</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems &&
                            currentItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.from_user}</td>
                                    <td>{item.amount}</td>
                                    <td>
                                        <input
                                            type='checkbox'
                                            name='status'
                                            id='status'
                                            defaultChecked={item.status}
                                            onChange={(e) => {
                                                let status = e.target.checked
                                                    ? true
                                                    : false;

                                                apiClient.put(
                                                    `/transactions/${item.id}`,
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
                                        />
                                        <label
                                            className='status'
                                            htmlFor='status'
                                        >
                                            Отправлено
                                        </label>
                                    </td>
                                    <td>{item.created_at.slice(0, 10)}</td>
                                </tr>
                            ))}
                    </tbody>
                </>
            ) : (
                <>
                    <thead>
                        <tr>
                            <th>Отправитель</th>
                            <th>Получатель</th>
                            <th>Сумма</th>
                            <th>Дата транзакции</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems &&
                            currentItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.from_username}</td>
                                    <td>{item.to_username}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.created_at.slice(0, 10)}</td>
                                </tr>
                            ))}
                    </tbody>
                </>
            )}
        </>
    );
};

const PaginatedItems = ({ itemsPerPage, transactions }) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const [filteredTransactions, setFilteredTransactions] =
        useState(transactions);

    const [q, setQ] = useState('');

    const [searchValueParams] = useState(['to_username', 'to_user', 'from_user']);

    const handleSearch = (username) => {
        setQ(username);
    };

    useEffect(() => {
        setFilteredTransactions(
            transactions.filter((transaction) => {
                return searchValueParams.some((param) => {
                    if (transaction[param]) {
                        return transaction[param]
                            .toLowerCase()
                            .includes(q.toLowerCase());
                    }
                });
            })
        );

        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(filteredTransactions.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filteredTransactions.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, q]);

    const handlePageClick = (event) => {
        const newOffset =
            (event.selected * itemsPerPage) % filteredTransactions.length;
        setItemOffset(newOffset);
    };

    return (
        <div className='page-container'>
            <div className='input-container'>
                <label className='label' htmlFor='search'>
                    Логин получателя:
                </label>
                <input
                    type='text'
                    id='search'
                    className='form-input'
                    value={q}
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                />
            </div>
            <div className='list'>
                <table>
                    <Items currentItems={currentItems} />
                </table>
            </div>
            <ReactPaginate
                breakLabel='...'
                nextLabel='Следующая'
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel='Предыдущая'
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

const Transactions = ({ profile }) => {
    const { tokens } = useContext(AuthContext);

    const [transactions, setTransactions] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [username, setUsername] = useState('');
    const [amount, setAmount] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        setIsLoading(true);

        apiClient
            .get('/transactions/', {
                headers: {
                    Authorization: `Bearer ${tokens.access}`,
                },
            })
            .then((response) => {
                setTransactions(response.data);

                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const createTransaction = async (e) => {
        e.preventDefault();

        apiClient
            .post(
                '/transactions/',
                {
                    username,
                    amount,
                },
                {
                    headers: {
                        Authorization: `Bearer ${tokens.access}`,
                    },
                }
            )
            .then((response) => {
                if (response.status === 201) {
                    setUsername('');
                    setAmount('');

                    e.target.username.value = '';
                    e.target.amount.value = '';

                    setSuccessMessage('Успешно отправлено!');

                    setTransactions(response.data, ...transactions);

                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 1000 * 5);
                }
            })
            .catch((error) => {
                setErrorMessage('Недостаточно средств на балансе!');

                setTimeout(() => {
                    setErrorMessage('');
                }, 1000 * 5);

                console.error(error);
            });
    };

    return (
        <TransactionsStyled>
            <h4 className='header'>Мой баланс</h4>

            <div className='balance'>
                <img src={MoneyIcon} alt='Balance icon' />
                <div>
                    <p>Баланс</p>
                    <p>{profile.balance} y.e</p>
                </div>
            </div>

            <h4>Совершить транзакцию</h4>

            <p className={errorMessage ? 'error-message' : 'hidden-message'}>
                {errorMessage}
            </p>
            <p
                className={
                    successMessage ? 'success-message' : 'hidden-message'
                }
            >
                {successMessage}
            </p>

            <form className='form' onSubmit={createTransaction}>
                <div className='input-container'>
                    <label className='label' htmlFor='username'>
                        Кому:
                    </label>
                    <input
                        type='text'
                        id='username'
                        className='form-input'
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className='input-container'>
                    <label className='label' htmlFor='amount'>
                        Сумма:
                    </label>
                    <input
                        type='number'
                        id='amount'
                        className='form-input'
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                    />
                </div>
                <button>Отправить</button>
            </form>

            {transactions.length > 0 ? (
                <>
                    <h4>История транзакции</h4>
                    <div className='transactions'>
                        {!isLoading && (
                            <PaginatedItems
                                itemsPerPage={10}
                                transactions={transactions}
                            />
                        )}
                    </div>
                </>
            ) : (
                <p>Загрузка...</p>
            )}
        </TransactionsStyled>
    );
};

export default Transactions;
