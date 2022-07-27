import React, {useEffect, useRef} from 'react';
import AppSectionTextContent from "../../../../components/AppSectionTextContent/AppSectionTextContent";
import s from './AppSectionAboutUs.module.scss'
import {onScrollVisible} from "../../../../utils/animateVisible";

function AppSectionAboutUs(props) {
    const paragraphs = [
        'Legendary for their agility, intelligence, and ferocity, the Little Cats have been prized since the time of the Pyramids.',
        'In 2022, the Little Cats have evolved into their final, most dominant form, and are ready to be uncaged — destined to rule the Metaverse.',
        'But be warned though — these Little Cats are exceptionally rare. To even catch a glimpse of them in the Metaverse is a privilege. To actually own an original Little Cat is to walk amongst virtual  gods.',
        'Little Cats NFTs will be the world\'s most refined and exclusive collection of provably rare digital assets, stored for eternity on the blockchain.',
        'Only 5000 Little Cats will be minted, preserving their majesty and influence for a select few who wish to be revered in the Metaverse forever. Every Little Cat will be designed by world-class artists with savage instincts for detail, quality, and adaptability.',
        'In a game of cat and mouse, the Little Cat always wins. Now is the time. Jump on your chance to own your very own Little Cat.',
    ]

    const $img = useRef(null)

    const normalizeMinMax = (val, min, max) => Math.min(Math.max(min, val), max);
    let imgScale = 1

    const animateImg = (event) => {
        const scrollTop = event.deltaY <= 0
        const delta = Math.abs(event.deltaY)
        const imgAnimationOnScrollDown = () => {
            const scaling =  delta / 3000
            imgScale = scrollTop ? imgScale - scaling : imgScale + scaling
            imgScale = normalizeMinMax(imgScale, 1, 1.25)
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

    useEffect(() => {
        return () => {
            window.removeEventListener('wheel', animateImg)
        }
    })

    return (
        <section className={s.section} id="about_us">
            <div className={s.container}>
                <div className={s.left} id="aboutUs">
                    <AppSectionTextContent
                        paragraphs={paragraphs}
                        name="About"
                        title="The Supreme Leader Of The Metaverse Kingdom"
                    />
                </div>

                <div className={s.imgContainer} >
                    <div className={s.imgBlock}>
                        <img src="/assets/little-cats/images/lc-6.png" alt="About us" ref={$img}/>
                    </div>
                    <div className={s.shadow} />
                </div>
            </div>
        </section>
    );
}

export default AppSectionAboutUs;