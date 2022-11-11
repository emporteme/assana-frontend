import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import HeaderWrapper from './Header.styled';

import CartIcon from '../../../assets/icons/cart.svg';
import CloseIcon from '../../../assets/icons/close.svg';
import HamburgerIcon from '../../../assets/icons/hamburger.svg';
import LogoIcon from '../../../assets/icons/logo.svg';
import ProfileIcon from '../../../assets/icons/profile.svg';
import SearchIcon from '../../../assets/icons/search.svg';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setIsDropdownOpen(false);
    }, [navigate]);

    const clickHandler = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const desktopNavLinks = [
        {
            name: 'Главная',
            link: '/',
        },
        {
            name: 'Магазин',
            link: '/store',
        },
        {
            name: 'О нас',
            link: '/about',
        },
    ];

    const mobileNavLinks = [
        {
            name: 'Главная',
            link: '/',
        },
        {
            name: 'Магазин',
            link: '/store',
        },
        {
            name: 'О нас',
            link: '/about',
        },
        {
            name: 'Профиль',
            link: '/profile',
        },
    ];

    return (
        <HeaderWrapper>
            <div className='container'>
                <div className='header'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={LogoIcon} alt='logo' />
                        </Link>
                    </div>
                    <div className='nav-items'>
                        <div className='nav-links'>
                            {desktopNavLinks.map(({ name, link }) => (
                                <Link to={link} key={name}>
                                    {name}
                                </Link>
                            ))}
                        </div>
                        <div className='nav-icons'>
                            <Link to='/cart'>
                                <img src={CartIcon} alt='Cart icon' />
                            </Link>
                            <Link to='/profile'>
                                <img src={ProfileIcon} alt='Profile icon' />
                            </Link>
                        </div>
                    </div>
                    <div className='hamburger'>
                        <Link to='/cart'>
                            <img src={CartIcon} alt='Cart icon' />
                        </Link>
                        {isDropdownOpen ? (
                            <img
                                src={CloseIcon}
                                onClick={clickHandler}
                                alt='Close icon'
                            />
                        ) : (
                            <img
                                src={HamburgerIcon}
                                onClick={clickHandler}
                                alt='Hamburger icon'
                            />
                        )}
                    </div>
                </div>
            </div>
            {isDropdownOpen && (
                <div className='dropdown'>
                    {mobileNavLinks.map(({ name, link }) => (
                        <Link to={link} key={name}>
                            {name}
                        </Link>
                    ))}
                </div>
            )}
        </HeaderWrapper>
    );
}
