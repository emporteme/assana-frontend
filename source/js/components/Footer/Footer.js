import { Link } from 'react-router-dom';

import FooterStyled from './Footer.styled';

import Confidentiality from '../../../assets/documents/confidentiality.pdf';

import InstagramIcon from '../../../assets/icons/instagram.svg';
import LogoIcon from '../../../assets/icons/logo.svg';

export default function Footer() {
    const navLinks = [
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
            name: 'Корзина',
            link: '/cart',
        },
    ];

    return (
        <FooterStyled>
            <div className='container'>
                <div className='footer'>
                    <div className='navbar'>
                        <div className='logo'>
                            <Link to='/'>
                                <img src={LogoIcon} alt='Logo icon' />
                            </Link>
                        </div>
                        <div className='nav-links'>
                            {navLinks.map(({ name, link }) => (
                                <Link to={link} key={name}>
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <hr className='divider' />
                    <div className='etc'>
                        <a className='confidentiality' href={Confidentiality}>
                            Политика конфиденциальности
                        </a>

                        <p className='copyright'>
                            Все права защищены &copy; 2022
                        </p>
                        <p className='contacts'>
                            010000, Республика Казахстан, г. Нур-Султан, ул.
                            Кабанбай батыра 46б
                        </p>
                        <p className='contacts'>
                            020000, Республика Казахстан, г. Кокшетау, ул.
                            Ауезова 208у
                        </p>
                    </div>
                </div>
            </div>
        </FooterStyled>
    );
}
