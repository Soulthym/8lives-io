import React, {useEffect} from 'react';
import s from './AppSectionGallery.module.scss'
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function AppSectionGallery(props) {
    const srcBase = '/assets/big-cats/images/'
    const srcGallery = `${srcBase}gallery/`
    const row1 = [
        `${srcGallery}img-11.png`, `${srcGallery}img-12.png`,
        `${srcGallery}img-1.jpg`, `${srcGallery}img-2.jpg`,
        `${srcGallery}img-3.jpg`, `${srcGallery}img-4.jpg`,
    ]

    const row2 = [
        `${srcGallery}img-5.jpg`, `${srcGallery}img-6.jpg`,
        `${srcGallery}img-7.jpg`, `${srcGallery}img-8.jpg`,
        `${srcGallery}img-9.jpg`, `${srcGallery}img-10.jpg`,
    ]


    return (
        <section className={s.section}>
            <div className={s.container}>
                <Splide
                    options={{
                        type: 'loop',
                        gap: '24px',
                        width: '100%',
                        autoWidth: true,
                        autoHeight: true,
                        speed: 3000,
                        arrows: false,
                        pagination: false,
                        drag: false,
                        easing: 'linear',
                        autoplay: true,
                        interval: 0,
                        pauseOnHover: false,
                        keyboard: false,
                        isNavigation: false,
                        direction: 'ltr',
                        lazyLoad: true
                    }}
                    hasSliderWrapper
                >
                    {row1.map(src => (
                        <SplideSlide key={src}>
                            <div className={s.imgContainer}>
                                <img src={src} alt="Big cat"/>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
                <Splide
                    options={{
                        type: 'loop',
                        gap: '24px',
                        width: '100%',
                        autoWidth: true,
                        autoHeight: true,
                        speed: 3000,
                        arrows: false,
                        pagination: false,
                        drag: false,
                        easing: 'linear',
                        autoplay: true,
                        interval: 0,
                        pauseOnHover: false,
                        keyboard: false,
                        isNavigation: false,
                        direction: 'rtl'
                    }}
                    hasSliderWrapper
                >
                    {row2.map(src => (
                        <SplideSlide key={src}>
                            <div className={s.imgContainer}>
                                <img src={src} alt="Big cat"/>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    )
}

export default AppSectionGallery;