import { useEffect, useState, useContext, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import apiClient from '../../api/apiClient';

import Card from '../../components/Card';
//import Starter from '../../components/Starter';

import StoreWrapper from './Store.styled';

import SearchIcon from '../../../assets/icons/search.svg';

export default function LimitedStore() {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [starters, setStarters] = useState([]);
    const navigate = useNavigate();

    const [q, setQ] = useState('');
    const [searchParams] = useState(['name', 'description']);

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [filteredStarters, setFilteredStarters] = useState(starters);

    const [activeLink, setActiveLink] = useState('Все продукты');

    const { tokens, setTokens } = useContext(AuthContext);

    const ref = useRef(null);
    {/* 
 if (!tokens) {
        useEffect(() => {
            navigate('/login');
        }, []);

        return '';
    }
*/}


    const logOutUser = () => {
        setTokens(null);

        localStorage.removeItem('tokens');
        localStorage.removeItem('orders');
        localStorage.removeItem('newUser');

        navigate('/');
    };

    useEffect(() => {
        setIsLoading(true);

        apiClient
            .get('/products')
            .then((response) => {
                setProducts(response.data);
                setFilteredProducts(response.data);
            })
            .finally(() => {
                setIsLoading(false);
            });
        //!@#Drago123
        apiClient
            .get('/starterpacks/')
            .then((response) => {
                setStarters(response.data);
                setFilteredStarters(response.data);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        setFilteredProducts(
            products.filter((product) => {
                return searchParams.some((param) => {
                    return product[param]
                        .toLowerCase()
                        .includes(q.toLowerCase());
                });
            }),
        );
        setFilteredStarters(
            products.filter((starter) => {
                return searchParams.some((param) => {
                    return starter[param]
                        .toLowerCase()
                        .includes(q.toLowerCase());
                });
            })
        );
    }, [q]);

    const catalog = [
        'Все продукты',
        'Наматрасники',
        'Одеяло',
        'Подушки',
        'Покрывало',
        'Постельные комплекты',
        'Специальное предложение',
    ];

    return (
        !isLoading && (
            <StoreWrapper>
                <div className='horizontal-filter'>
                    {catalog.map((item, index) => (
                        <div
                            key={index}
                            className={`catalog ${activeLink === item ? 'active' : ''
                                }`}
                            onClick={() => setActiveLink(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className='search-bar'>
                    <img src={SearchIcon} alt='Search icon' />
                    <input
                        placeholder='Поиск'
                        id='search'
                        type='text'
                        value={q}
                        onChange={(e) => {
                            setQ(e.target.value);
                        }}
                    />
                </div>
                {!tokens ? (
                    <>
                        <h1>{activeLink}</h1>
                        <div className='container'>
                            {activeLink === 'Все продукты'
                                ? filteredProducts.map((product) => (
                                    <Card
                                        key={product.id}
                                        id={product.id}
                                        name={product.name}
                                        image={product.image}
                                        description={product.description}
                                        options={product.options[0]}
                                        size={product.options[0]?.name}
                                        price={product.options[0]?.price}
                                        pv={product.options[0]?.pv}
                                        colors={product.colors}
                                    />
                                ))
                                : filteredProducts
                                    .filter(
                                        (product) => product.category === activeLink
                                    )
                                    .map((product) => (
                                        <Card
                                            key={product.id}
                                            id={product.id}
                                            name={product.name}
                                            image={product.image}
                                            description={product.description}
                                            options={product.options[0]}
                                            size={product.options[0]?.name}
                                            price={product.options[0]?.price}
                                            pv={product.options[0]?.pv}
                                            colors={product.colors}
                                        />
                                    ))}
                        </div>
                    </>
                ) :
                    <>
                        {tokens.role && tokens.role !== 'User' ? (
                            <>
                                <h1>{activeLink}</h1>
                                <div className='container'>
                                    {activeLink === 'Все продукты'
                                        ? filteredProducts.map((product) => (
                                            <Card
                                                key={product.id}
                                                id={product.id}
                                                name={product.name}
                                                image={product.image}
                                                description={product.description}
                                                options={product.options[0]}
                                                size={product.options[0]?.name}
                                                price={product.options[0]?.price}
                                                pv={product.options[0]?.pv}
                                                colors={product.colors}
                                            />
                                        ))
                                        : filteredProducts
                                            .filter(
                                                (product) => product.category === activeLink
                                            )
                                            .map((product) => (
                                                <Card
                                                    key={product.id}
                                                    id={product.id}
                                                    name={product.name}
                                                    image={product.image}
                                                    description={product.description}
                                                    options={product.options[0]}
                                                    size={product.options[0]?.name}
                                                    price={product.options[0]?.price}
                                                    pv={product.options[0]?.pv}
                                                    colors={product.colors}
                                                />
                                            ))}
                                </div>
                            </>
                        ) : (
                            <>
                                <h1>{activeLink}</h1>
                                <div className='container'>
                                    {activeLink === 'Все продукты'
                                        ? filteredStarters.map((starter) => (
                                            <Card
                                                key={starter.id}
                                                id={starter.id}
                                                name={starter.name}
                                                image={starter.image}
                                                description={starter.description}
                                                options={starter.options[0]}
                                                size={starter.options[0]?.name}
                                                price={starter.options[0]?.price}
                                                pv={starter.options[0]?.pv}
                                                colors={starter.colors}
                                            />
                                        ))
                                        : filteredStarters
                                            .filter(
                                                (starter) => starter.category === activeLink
                                            )
                                            .map((starter) => (
                                                <Card
                                                    key={starter.id}
                                                    id={starter.id}
                                                    name={starter.name}
                                                    image={starter.image}
                                                    description={starter.description}
                                                    options={starter.options[0]}
                                                    size={starter.options[0]?.name}
                                                    price={starter.options[0]?.price}
                                                    pv={starter.options[0]?.pv}
                                                    colors={starter.colors}
                                                />
                                            ))}
                                </div>
                            </>
                        )
                        }
                    </>
                }


            </StoreWrapper>
        )
    );
}


/*
, {
                headers: {
                    Authorization: `Bearer ${tokens.access}`,
                },
            }
*/