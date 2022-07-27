import React, {useEffect, useRef} from 'react';
import s from './AppSectionTextAnimated.module.scss'
import {animateVisible} from "../../utils/animateVisible";

function AppSectionTextAnimated({paragraphs, children}) {
    const $cont = useRef(null)
    const $content = useRef(null)

    const animate = () => {
        animateVisible({
            visibleEl: $cont.current,
            animateEl: $content.current,
            duration: 1.5,
            animationName: 'fadeInUp__50',
            visiblePart: 0.12
        })
        if ($content.current.classList.contains('active')) {
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
        <div ref={$cont}>
            <div ref={$content} className={s.content}>
                {paragraphs.map((p, idx) => (
                    <p key={p[2]+idx} className={s.text}>{p}</p>
                ))}
                <div className={s.children}>{children}</div>
            </div>
        </div>
    );
}

export default AppSectionTextAnimated;