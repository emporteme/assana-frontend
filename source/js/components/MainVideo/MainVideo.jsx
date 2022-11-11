import { React, useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './MainVideo.css';

import apiClient from '../../api/apiClient';

const Videok = (item) => {
    return (
        <div>
            <iframe
                src={item.url}
                title={item.title}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'
                allowFullScreen
            ></iframe>
        </div>
    );
};

const MainVideo = () => {
    const [video, setVideo] = useState([]);

    const getVideo = async () => {
        const response = await apiClient.get('/info/videos/');

        if (response.status === 200) {
            setVideo(response.data);
        }
    };

    useEffect(() => {
        getVideo();
    }, []);

    return (
        <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            centerMode={false}
            emulateTouch
            swipeable
            autoPlay
            interval="5000" 
            transitionTime="500"
            infiniteLoop
            showIndicators={false}
            className='mission-video'
        >
            {video.length > 0 ? (
                video.map((item, index) => <Videok key={index} {...item} />)
            ) : (
                <p>Новых видео нет...</p>
            )}
        </Carousel>
    );
};

export default MainVideo;
