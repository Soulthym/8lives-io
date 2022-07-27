import React, {useEffect, useRef} from 'react';
import AppSectionTextContent from "../../../../components/AppSectionTextContent/AppSectionTextContent";
import s from './AppSectionFeatures.module.scss'
import {onScrollVisible} from "../../../../utils/animateVisible";
import AppButtonDiscord from "../../../../components/UI/AppButtonDiscord/AppButtonDiscord";

function AppSectionFeatures(props) {
    const paragraphs = [
        `Just like in the wild, the Metaverse is made up of predators. When compared to other NFTs, Little Cats are at the top of the food chain — no questions. The weak will be safe until the beginning of February, when the best will be chosen. From then on, the leaders will claim their dominance on the Metaverse and no one will be safe ever again.
What better way to secure your legacy in the Metaverse than with a Little Cats? Only the alphas lunge towards majesty and immortality. Take your leap now.`
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
            document.removeEventListener('wheel', animateImg, false);
        }
    }, [])


    return (
        <section className={s.section} id="features">
            <div className={s.container}>
                <div className={s.left}>
                    <div className={s.imgBlock}>
                        <img src="/assets/little-cats/images/lc-2.jpg" alt="" ref={$img}/>
                    </div>
                    <div className={s.shadow} />
                </div>
                <div className={s.right}>
                    <AppSectionTextContent
                        paragraphs={paragraphs}
                        name={'Features'}
                        title={'WILL YOU BE ACCEPTED AS THE BEST AMONG THE BEST?'}
                    >
                    <AppButtonDiscord join={true}/>
                    </AppSectionTextContent>
                </div>
            </div>
        </section>
    );
}

export default AppSectionFeatures;