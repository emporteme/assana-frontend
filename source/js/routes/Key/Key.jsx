import React from 'react';
import './Key.css';
import PostLogo from '../../../assets/images/post_logo.svg';
import MainLogo from '../../../assets/images/main_logo.svg';
/**/
import Table from '../../../assets/images/table.jpg';
import Table2 from '../../../assets/images/table2.jpg';
import Table7 from '../../../assets/images/table7.jpg';
import Table4 from '../../../assets/images/table4.jpg';
import Table5 from '../../../assets/images/table5.jpg';
import Table6 from '../../../assets/images/table6.jpg';

export default function Key() {
    return (
        <div className='plan'>
            <div className='plan__main'>
                <div className='plan__block'>
                    <img
                        src={PostLogo}
                        alt='Mission image'
                        className='plan__logo'
                    />
                </div>
            </div>
            <div className='plan__start'>
                <div className='plan__start_logo'>
                    <img
                        src={MainLogo}
                        alt='Mission image'
                        className='plan__logo_img'
                    />
                </div>
                <div className='plan__table'>
                    <img
                        src={Table}
                        alt='Mission image'
                        className='plan__logo'
                    />
                </div>
            </div>
            <div className='plan__type'>
                <div className='plan__start_logo'>
                    <img
                        src={MainLogo}
                        alt='Mission image'
                        className='plan__logo_img'
                    />
                </div>
                <div className='plan__table'>
                    <img
                        src={Table2}
                        alt='Mission image'
                        className='plan__logo'
                    />
                </div>
            </div>
            <div className='plan__binar'>
                <div className='plan__table'>
                    <img
                        src={Table7}
                        alt='Mission image'
                        className='plan__logo'
                    />
                </div>
            </div>
            <div className='plan__profit'>
                <div className='plan__table'>
                    <img
                        src={Table4}
                        alt='Mission image'
                        className='plan__logo'
                    />
                </div>
            </div>
            <div className='plan__mlm'>
                <div className='plan__table'>
                    <img
                        src={Table5}
                        alt='Mission image'
                        className='plan__logo'
                    />
                </div>
            </div>
            <div className='plan__kvalika'>
                <div className='plan__start_logo'>
                    <img
                        src={MainLogo}
                        alt='Mission image'
                        className='plan__logo_img'
                    />
                </div>
                <div className='plan__table'>
                    <img
                        src={Table6}
                        alt='Mission image'
                        className='plan__logo'
                    />
                </div>
            </div>
        </div>
    );
}
