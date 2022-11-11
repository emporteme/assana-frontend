import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

import WalletStyled from './Wallet.styled';

import BalanceIcon from '../../../assets/icons/balance.svg';
import MoneyIcon from '../../../assets/icons/money.svg';

const Wallet = ({ profile }) => {
    const { tokens } = useContext(AuthContext);

    const walletInformation = [
        {
            title: 'Баланс',
            value: profile.balance,
        },
        {
            title: 'Кэшбэк',
            value: profile.cashback,
        },
        {
            title: 'Бонусы сегодня',
            value: profile.todays_bonus,
        },
        {
            title: 'Бонусы за вчера',
            value: profile.yesterdays_bonus,
        },
    ];

    return (
        <WalletStyled>
            {tokens.role && tokens.role !== 'User' ? (
                <div className='wallet-block'>
                    <img src={BalanceIcon} alt='Wallet block icon' />
                    <div className='wallet-information'>
                        <p>Баланс</p>
                        <p>{profile.balance} y.e</p>
                    </div>
                </div>
            ) : (
                walletInformation.map((item, index) => (
                    <div className='wallet-block' key={index}>
                        <img
                            src={
                                item.title === 'Баланс'
                                    ? BalanceIcon
                                    : MoneyIcon
                            }
                            alt='Wallet block icon'
                        />
                        <div className='wallet-information'>
                            <p>{item.title}</p>
                            <p>{item.value} y.e</p>
                        </div>
                    </div>
                ))
            )}
        </WalletStyled>
    );
};

export default Wallet;
