import React, {useEffect, useRef} from 'react';
import s from './AppSectionTitleAnimated.module.scss'
import {animateVisible} from "../../utils/animateVisible";
import TwoLines from "../UI/icons/TwoLines";

function AppSectionTitleAnimated({name, title}) {
    const $title = useRef(null)
    const $cont = useRef(null)
    const letters = name.split('')
    let $letters = []
    let lettersLength

    const animate = () => {
        let delay = 0;
        let activeAnimations = lettersLength
        $letters.forEach($l => {
            if (!$l.classList.contains('active')) {
                animateVisible({
                    visibleEl: $cont.current,
                    animateEl: $l,
                    duration: 0.7,
                    delay,
                    animationName: 'fadeInUp__100',
                    visiblePart: 0.2
                })
                activeAnimations -= 1
            }
            delay += 0.12

        })

        const titleAnimated = $title.current.classList.contains('active')

        if (!titleAnimated) {
            animateVisible({
                visibleEl: $cont.current,
                animateEl: $title.current,
                duration: 1.3,
                animationName: 'fadeInUp__150',
                visiblePart: 0.5
            })
        }

        if (titleAnimated && activeAnimations === lettersLength) {
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
        $letters = [...$cont.current.querySelectorAll(`.${s.name} span`)]
        lettersLength = $letters.length
        animate()
        addEventListeners()
        return () => {
           removeEventListeners()
        }
    }, [])


    return (
        <div className={`${s.container}`} ref={$cont}>
            <div>
                <span className={`${s.name}`}>
                    {letters.map((l, idx) => (<span key={`${l}${idx}`}>{l}</span>))}
                </span>
                <TwoLines/>
            </div>
            <h2 className={s.title} ref={$title}> {title} </h2>
        </div>
    );
}

export default AppSectionTitleAnimated;