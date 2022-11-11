import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//import Tree from 'react-d3-tree';

import { AuthContext } from '../../context/AuthContext';

import apiClient from '../../api/apiClient';

import ProfileStyled from './Profile.styled';

import Treee from '../../components/Tree';
import ChangePassword from '../../components/ChangePassword';
import EditProfile from '../../components/EditProfile';
import InviteUser from '../../components/InviteUser';
import Account from '../../components/Account';
import Key from '../../routes/Key';
import Pdf from '../../routes/Pdf';
import MyOrders from '../../components/MyOrders';
import Transactions from '../../components/Transactions';
import Wallet from '../../components/Wallet';
import News from '../../components/News';
import Recommenders from '../../components/Recommenders';

import DiversityImage from '../../../assets/images/diversity.jpg';


export default function Profile() {
    const navigate = useNavigate();

    const bottomRef = useRef(null);

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

    const [profile, setProfile] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const [tree, setTree] = useState(null);

    useEffect(() => {
        apiClient
            .get('/profile/', {
                headers: {
                    Authorization: `Bearer ${tokens.access}`,
                },
            })
            .then(({ data }) => {
                setProfile(data);
            });

        apiClient
            .get('/tree/', {
                headers: {
                    Authorization: `Bearer ${tokens.access}`,
                },
            })
            .then(({ data }) => {
                setTree(data);
            });
    }, []);

    const tabs = [
        'Мой аккаунт',
        'Мой кошелек',
        'Мои заказы',
        'Моя структура',
        'Структура рекомендателей',
        'Перевод средств',
        'Регистрация участника',
        'Изменить данные',
        'Изменить пароль',
        'Новости',
        'Маркетинг план',
        'ПДФ'
    ];

    const accountantTabs = [
        'Мой аккаунт',
        'Мой кошелек',
        'Заказы',
        'Транзакции',
        'Изменить данные',
        'Изменить пароль',
        'Маркетинг план',
        'ПДФ'
    ];

    const [activeTab, setActiveTab] = useState('Мой аккаунт');

    useEffect(() => {
        if (window.innerWidth <= 768) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [activeTab]);

    return (
        <ProfileStyled>
            <div className='sidebar'>
                <div className='user-data'>
                    <img
                        src={profile.image ? profile.image : DiversityImage}
                        alt=''
                    />
                    <h2>
                        {profile.first_name} {profile.last_name}
                    </h2>
                </div>
                <div className='tabs'>
                    {tokens.role && tokens.role !== 'User'
                        ? accountantTabs.map((tab, index) => (
                              <div
                                  key={index}
                                  className={
                                      tab === activeTab ? 'tab active' : 'tab'
                                  }
                                  onClick={() => setActiveTab(tab)}
                              >
                                  <p>{tab}</p>
                              </div>
                          ))
                        : tabs.map((tab, index) => (
                              <div
                                  key={index}
                                  className={
                                      tab === activeTab ? 'tab active' : 'tab'
                                  }
                                  onClick={() => setActiveTab(tab)}
                              >
                                  <p>{tab}</p>
                              </div>
                          ))}
                    <div className='tab' onClick={logOutUser}>
                        <p>Выход</p>
                    </div>
                </div>
            </div>
            <div ref={bottomRef} />
            <div className='content'>
                <h1>{activeTab}</h1>
                <div className='container'>
                    {tokens.role && tokens.role !== 'User' ? (
                        <div>
                            {activeTab === 'Мой аккаунт' && (
                                <Account profile={profile} />
                            )}
                            {activeTab === 'Маркетинг план' && (
                                <Key/>
                            )}
                            {activeTab === 'ПДФ' && (
                                <Pdf/>
                            )}
                            {activeTab === 'Мой кошелек' && (
                                <Wallet profile={profile} />
                            )}
                            {activeTab === 'Заказы' && <MyOrders />}
                            {activeTab === 'Транзакции' && (
                                <Transactions
                                    profile={profile}
                                    setProfile={setProfile}
                                />
                            )}
                            {activeTab === 'Изменить данные' && (
                                <EditProfile profile={profile} />
                            )}
                            {activeTab === 'Изменить пароль' && (
                                <ChangePassword />
                            )}
                        </div>
                    ) : (
                        <div>
                            {activeTab === 'Мой аккаунт' && (
                                <Account profile={profile} />
                            )}
                            {activeTab === 'Маркетинг план' && (
                                <Key/>
                            )}
                            {activeTab === 'ПДФ' && (
                                <Pdf/>
                            )}
                            {activeTab === 'Мой кошелек' && (
                                <Wallet profile={profile} />
                            )}
                            {activeTab === 'Мои заказы' && <MyOrders />}
                            {activeTab === 'Моя структура' && <Treee/> }                  {/* тут дерево   */}
                            {activeTab === 'Структура рекомендателей' && (
                                <Recommenders />
                            )}
                            {activeTab === 'Перевод средств' && (
                                <Transactions
                                    profile={profile}
                                    setProfile={setProfile}
                                />
                            )}
                            {activeTab === 'Регистрация участника' && (
                                <InviteUser />
                            )}
                            {activeTab === 'Новости' && <News />}
                            {activeTab === 'Изменить данные' && (
                                <EditProfile profile={profile} />
                            )}
                            {activeTab === 'Изменить пароль' && (
                                <ChangePassword />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </ProfileStyled>
    );
}
