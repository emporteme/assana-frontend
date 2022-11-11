import { React } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';

import MainVideo from '../../components/MainVideo';

import MainStyled from './Main.styled';

import BannerImage from '../../../assets/images/banner.png';
import BannerImage2 from '../../../assets/images/banner2.jpg';
import BannerImage3 from '../../../assets/images/banner3.jpg';
import BenefitsImage from '../../../assets/images/benefits.png';
import MissionImage from '../../../assets/images/mission.png';

import QualityIcon from '../../../assets/icons/quality.svg';
import LongTimeIcon from '../../../assets/icons/long-time.svg';
import HypoallergenicIcon from '../../../assets/icons/hypoallergenic.svg';

//!@#Drago123  !@#Drago123        

const Main = () => {
    return (
        <MainStyled>
            {/* banner */}
            <div className='banner'>
                <Carousel showArrows={false} showStatus={false} showThumbs={false} centerMode={false} emulateTouch swipeable autoPlay infiniteLoop showIndicators={false} className='width banner-image'>
                    <div className='banner-image'>
                        <img src={BannerImage} alt='Banner image' />
                    </div>
                    <div className='banner-image'>
                        <img src={BannerImage2} alt='Banner image' />
                    </div>
                    <div className='banner-image'>
                        <img src={BannerImage3} alt='Banner image' />
                    </div>
                </Carousel>
                <div className='banner-content'>
                    <h1>Assana Company</h1>
                    <p>С заботой о вашем здоровье</p>
                    <button>
                        <a href='tel:+7 (701) 318-66-66'>Позвонить</a>
                    </button>
                </div>
            </div>
            {/* offers */}
            <div className='offers'>
                <h2>Что мы даем</h2>
                <div className='offers-list'>
                    <div className='offers-item'>
                        <div className='offer-image-container'>
                            <img src={QualityIcon} alt='Quality icon' />
                        </div>
                        <h3>Качественный продукт</h3>
                        <p>Все изделия сделаны чисто из натуральной ткани.</p>
                    </div>
                    <div className='offers-item'>
                        <div className='offer-image-container'>
                            <img src={LongTimeIcon} alt='Long time icon' />
                        </div>
                        <h3>Долгий срок службы</h3>
                        <p>
                            Изделия качественные и прочные. Стираются легко и
                            быстро, не требуют особого ухода. Это обеспечит вам
                            длительный срок службы.
                        </p>
                    </div>
                    <div className='offers-item'>
                        <div className='offer-image-container'>
                            <img
                                src={HypoallergenicIcon}
                                alt='Hypoallergenic icon'
                            />
                        </div>
                        <h3>Гиппоаллергенность</h3>
                        <p>
                            Наша ткань сделана чисто из гиппоаллергенных
                            материалов. Это избавит вас от тревог об аллергии и
                            даст вашему организму легкость.
                        </p>
                    </div>
                </div>
            </div>
            {/* benefits */}
            <div className='benefits'>
                <div className='benefits-image'>
                    <img src={BenefitsImage} alt='Benefits image' />
                </div>
                <div className='benefits-content'>
                    <div>
                        <h2>Сон</h2>
                        <p>
                            Это не просто горизонтальное времяпровождение, это
                            важная часть нашей жизни. От комфортного сна зависит
                            наше состояние в течении дня. Мы подобрали ткань для
                            создания комплектов Assana таким образом, чтобы
                            сделать сон еще более здоровым.
                        </p>
                    </div>
                    {/*
                    <div>
                        <h2>
                            Комплекты <span>Assana:</span>
                        </h2>
                        <ol>
                            <li>Способствуют правильной терморегуляции</li>
                            <li>Обладают антибактериальным эффектом</li>
                            <li>Предотвращают атопию и кожный дерматит</li>
                            <li>Снимают усталость</li>
                        </ol>
                    </div>
                    */}
                </div>
            </div>
            {/* mission */}
            <div className='mission'>
                <h2>
                    Миссия <span>Assana</span>
                </h2>
                <div className='mission-content'>
                    <div className='mission-image'>
                        <img src={MissionImage} alt='Mission image' />
                    </div>
                    <MainVideo />
                </div>
                <p>
                    Наша миссия вырастить здоровое поколение. Вся продукция
                    направлена на то, чтобы сделать вас еще более здоровыми,
                    красивыми и счастливыми.
                </p>
            </div>
        </MainStyled>
    );
}//!@#Drago123

export default Main;

/*<div className='mission-video'> 
                        <iframe
                            src='https://www.youtube.com/embed/jhl1zZUlNE8'
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'
                            allowFullScreen
                        ></iframe>
                    </div>*/


/*
{video.length > 0 ? (
        video.map((item, index) => <Videok key={index} {...item} />)
    ) : (
        <p>Новых видео нет...</p>
    )}
*/