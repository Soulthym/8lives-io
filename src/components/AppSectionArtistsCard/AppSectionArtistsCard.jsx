import React, {useEffect, useRef} from 'react';
import s from './AppSectionArtistsCard.module.scss'
import {animateVisible, onScrollVisible} from "../../utils/animateVisible";
import InWhite from "../UI/icons/InWhite";
import ImdbWhite from "../UI/icons/ImdbWhite";
import LinkWhite from "../UI/icons/LinkWhite";

function AppSectionArtistsCard({imgSrc, name, description, linkedin='/', imdb='/', link='/'}) {

    const $img = useRef(null)

    const normalizeMinMax = (val, min, max) => Math.min(Math.max(min, val), max);
    let imgScale = 1

    const animateImg = (event) => {
        const scrollTop = event.deltaY <= 0
        const delta = Math.abs(event.deltaY)
        const imgAnimationOnScrollDown = () => {
            const scaling =  delta / 4500
            imgScale = scrollTop ? imgScale - scaling : imgScale + scaling
            imgScale = normalizeMinMax(imgScale, 1, 1.1)
            $img.current.style.transform = `scale(${imgScale})`;
        }

        onScrollVisible({
            $el: $img.current,
            event,
            visiblePartOnDown: 0.2,
            visiblePartOnTop: 0.1,
            onDown: imgAnimationOnScrollDown,
        })
    }

    window.addEventListener('wheel', animateImg)

    const $description = useRef(null)

    const animate = () => {
        animateVisible({
            visibleEl: $description.current,
            animateEl: $description.current,
            duration: 1.5,
            animationName: 'fadeInLeft__75',
            visiblePart: 0.12,
        })
        if ($description.current.classList.contains('active')) {
            removeEventListeners()
        }
    }

    function addEventListeners () {
        document.addEventListener('DOMContentLoaded', animate, false);
        document.addEventListener('load', animate, false);
        document.addEventListener('scroll', animate, false);
        document.addEventListener('resize', animate, false);
    }

    function removeEventListeners () {
        document.removeEventListener('DOMContentLoaded', animate, false);
        document.removeEventListener('load', animate, false);
        document.removeEventListener('scroll', animate, false);
        document.removeEventListener('resize', animate, false);
    }

    useEffect(() => {
        animate()
        addEventListeners()
        return () => {
           removeEventListeners()
        }
    }, [])

    return (
        <div className={s.container}>
            <div className={s.imgContainer}>
                <img src={imgSrc} alt="Artist" ref={$img}/>
            </div>

            <div className={`${s.description} fadeInLeft__75__prep`} ref={$description}>
                <h3><span>{name[0]}</span>{name.slice(1)}</h3>
                <p>{description}</p>
                <ul className={s.socials}>
                    <li className={s.in}><a href={linkedin} target="_blank" rel="noreferrer"><InWhite /></a></li>
                    <li className={s.imdb}><a href={imdb} target="_blank" rel="noreferrer"><ImdbWhite /></a></li>
                    <li className={s.link}><a href={link} target="_blank" rel="noreferrer"><LinkWhite /></a></li>
                </ul>
            </div>
        </div>
    );
}

export default AppSectionArtistsCard;