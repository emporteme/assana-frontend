import { useEffect, useState } from 'react';

import apiClient from '../../api/apiClient';

import { NewStyled, NewDetailedStyled, NewsStyled } from './News.styled';

import CloseWhiteIcon from '../../../assets/icons/close-white.svg';

const New = (item) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <>
            {isOpened && (
                <NewDetailedStyled bg={item.image}>
                    <div className='content'>
                        <div className='image-container'>
                            <img
                                src={CloseWhiteIcon}
                                onClick={() => {
                                    setIsOpened(false);
                                }}
                                alt='Close icon'
                            />
                        </div>
                        <div className='information'>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </NewDetailedStyled>
            )}
            <NewStyled
                className='content'
                bg={item.image}
                onClick={() => setIsOpened(true)}
            >
                <div className='content'>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            </NewStyled>
        </>
    );
};

const News = () => {
    const [news, setNews] = useState([]);

    const getNews = async () => {
        const response = await apiClient.get('/news');

        if (response.status === 200) {
            setNews(response.data);
        }
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <NewsStyled>
            {news.length > 0 ? (
                news.map((item, index) => <New key={index} {...item} />)
            ) : (
                <p>Новых новостей нет...</p>
            )}
        </NewsStyled>
    );
};

export default News;
