import { useContext, useState } from 'react';

import { LevelUpStyled } from './Account.styled';

import { AuthContext } from '../../context/AuthContext';

import apiClient from '../../api/apiClient';

import AccountStyled from './Account.styled';

const Account = ({ profile }) => {
    const { tokens } = useContext(AuthContext);

    const personalInformation = [
        {
            label: 'Имя',
            value: profile.first_name + ' ' + profile.last_name,
        },
        {
            label: 'Квалификация',
            value: profile.user_status,
        },
        {
            label: 'Статус',
            value: profile.status,
        },
        {
            label: 'Логин',
            value: profile.username,
        },
        {
            label: 'Почта',
            value: profile.email,
        },
    ];

    const accountantInformation = [
        {
            label: 'Имя',
            value: profile.first_name + ' ' + profile.last_name,
        },
        {
            label: 'Логин',
            value: profile.username,
        },
        {
            label: 'Почта',
            value: profile.email,
        },
    ];

    return (
        <AccountStyled>
            {
                tokens.role && tokens.role !== 'User' ? (
                    accountantInformation.map((item, index) => (
                        <div key={index}>
                            <div>
                                <p>{item.label}</p>
                                <p>{item.value}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    personalInformation.map((item, index) => (
                        <div key={index}>
                            <div>
                                <p>{item.label}</p>
                                <p>{item.value}</p>
                            </div>
                        </div>
                    ))
                )
            }
        </AccountStyled>
    );
};

export default Account;
