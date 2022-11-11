import { useEffect, useState } from 'react';

import apiClient from '../../api/apiClient';

import { NewStyled, NewsStyled } from './News.styled';

const File = (item) => {
    return (
        <>
            <a target="_blank" href={item.document} download={item.document}>
                <NewStyled className='content' bg={item.thumbnail}>
                    <div className='content'>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                </NewStyled>
            </a>
        </>
    );
};

const Pdf = () => {
    const [pdf, setPdf] = useState([]);

    const getPdf = async () => {
        const response = await apiClient.get('/info/files/');

        if (response.status === 200) {
            setPdf(response.data);
        }
    };

    useEffect(() => {
        getPdf();
    }, []);

    return (
        <NewsStyled>
            {pdf.length > 0 ? (
                pdf.map((item, index) => <File key={index} {...item} />)
            ) : (
                <p>Новых файлов нет...</p>
            )}
        </NewsStyled>
    );
};

export default Pdf;

/* OLD CODE */

/*import React from 'react';
import { useEffect, useState } from 'react';
//styles
import './Pdf.css';
// api import
import apiClient from '../../api/apiClient';
import PostLogo from '../../../assets/images/post_logo.svg';
const Pdf = () => {
    return (
        <div className='file'>
            <a href='doc.dpf' download='doc.dpf' className='file__block'>
                <img
                    src={PostLogo}
                    alt='img'
                    className='file__img'
                />
            </a>
            <a href='doc.dpf' download='doc.dpf' className='file__block'>
                <img
                    src={PostLogo}
                    alt='img'
                    className='file__img'
                />
            </a>
            <a href='doc.dpf' download='doc.dpf' className='file__block'>
                <img
                    src={PostLogo}
                    alt='img'
                    className='file__img'
                />
            </a>
        </div>
    );
};
/*const Pdf = () => {
    const [pdf, setPdf] = useState([]);
//!@#Drago123
    const getPdf = async () => {
        const response = await apiClient.get('/info/files');

        if (response.status === 200) {
            setPdf(response.data);
        }
    };

    useEffect(() => {
        getPdf();
    }, []);

    return (
        <div className="pdf__block">
            {this.state.data.map(navdata => {
                  return (
                    <li key={navdata.id} className="header__about-choice">
                      {navdata.navName}
                    </li>
                  );
                })}
            {pdf.length > 0 ? (
                pdf.map((item, index) => <File key={index} {...item} />)
            ) : (
                <p>Новых файлов нет...</p>
            )}
        </div>
    );
};

export default Pdf;
*/

/*
<a href={item.results.document} download={item.results.document}>
                <NewStyled className='content' bg={item.results.thumbnail}>
                    <div className='content'>
                        <h2>{item.results.name}</h2>
                        <p>{item.results.description}</p>
                    </div>
                </NewStyled>
            </a>
*/

/*
{item.results.length > 0 ? <a href={item.results[0].document} download={item.results[0].document}>
                <NewStyled className='content' bg={item.results[0].thumbnail}>
                    <div className='content'>
                        <h2>{item.results[0].name}</h2>
                        <p>{item.results[0].description}</p>
                    </div>
                </NewStyled>
            </a>: 'нет документа'} 
*/