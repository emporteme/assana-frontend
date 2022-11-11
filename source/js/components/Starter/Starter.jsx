import { useEffect, useState, useContext, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import apiClient from '../../api/apiClient';

import Card from '../../components/Card';

import StoreWrapper from './Store.styled';

import SearchIcon from '../../../assets/icons/search.svg';

export default function Starter() {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [starters, setStarters] = useState([]);
    const navigate = useNavigate();

    const [q, setQ] = useState('');
    const [searchParams] = useState(['name', 'description']);

    const [filteredProducts, setFilteredProducts] = useState(products);

    const [activeLink, setActiveLink] = useState('Все продукты');

    const { tokens, setTokens } = useContext(AuthContext);

    const ref = useRef(null);

    if (!tokens) {
        useEffect(() => {
            navigate('/login');
        }, []);

        return '';
    }

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
            .get('/starterpacks')
            .then((response) => {
                setProducts(response.data);
                setFilteredProducts(response.data);
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
                                      (product) =>
                                          product.category === activeLink
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
                                      (product) =>
                                          product.category === activeLink
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
            )}
        </>
    );
}

/*
, {
                headers: {
                    Authorization: `Bearer ${tokens.access}`,
                },
            }
*/
