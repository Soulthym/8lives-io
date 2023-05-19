import React, {useEffect, useRef} from 'react';
import s from './AppFooter.module.scss'
import Instagram from "../../../../components/UI/icons/Instagram";
import Twitter from "../../../../components/UI/icons/Twitter";
import AppButtonDiscord from "../../../../components/UI/AppButtonDiscord/AppButtonDiscord";
import {animateVisible} from "../../../../utils/animateVisible";

function AppFooter(props) {
    const $content = useRef(null)
    const $contentCont = useRef(null)
    const animate = () => {
        animateVisible({
            visibleEl: $contentCont.current,
            animateEl: $content.current,
            duration: 1,
            visiblePart: 0.2,
            animationName: 'fadeInUp__50',
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
        <div className={s.section}>
            <div className={s.containerContent} ref={$contentCont}>
                <div className={`${s.content} fadeInUp__50__preset`} ref={$content}>
                    <h3>I'M ABOUT TO TEAR THE METAVERSE APART — I WANT MY OWN BIG CAT!</h3>
                    <p>
                        If you think you are ready to be accepted by the most powerful pride the Metaverse has ever known,
                        now is the time to act. Leap into our official Discord Channel for exclusive offers and inside
                        information. Time is running out to own the finest NFTs the world has ever known.
                        Join us as we set out to claw through the Metaverse...
                    </p>

                    <AppButtonDiscord join={true}/>
                </div>
            </div>

            <footer className={s.footer}>
                <div className={s.container}>
                    <p>©All rights reserved. 2022</p>

                    <ul className={s.socials}>
                        <li><a href="https://twitter.com/8livesio" target="_blank"><Twitter/></a></li>
                        <li><a href="https://www.instagram.com/8livesio/" target="_blank"><Instagram/></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default AppFooter;
