import React, {useRef, useState} from 'react';
import s from './AppSectionRoadmapStep.module.scss'
import Line from "../UI/icons/Line";
import StepPoint from "../UI/icons/StepPoint";
import LineDone from "../UI/icons/LineDone";
import StepPointDone from "../UI/icons/StepPointDone";

function AppSectionRoadmapStep({number, title, description, line = true, titleUppercase=true, custom=false}) {
    const $stepLineContainer = useRef(null)

    const [loadedLineHeight, setLoadedLineHeight] = useState(0)

    const [stepActive, setStepActive] = useState(false)

    const normalizeMinMax = (val, min, max) => Math.min(Math.max(min, val), max);

    const stepsAnimation = () => {
        const $el = $stepLineContainer.current
        const rect = $el?.getBoundingClientRect();
        const elHeight = $el.clientHeight;
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight)

        const topPart = windowHeight * 2 / 3

        const loadedHeight = ~~(elHeight - rect.bottom + topPart)
        setLoadedLineHeight(normalizeMinMax(loadedHeight, 0, elHeight))
        setStepActive((loadedHeight > 0))
    }

    window.addEventListener('scroll', stepsAnimation)
    window.addEventListener('resize', stepsAnimation)


    const $stepCont = useRef(null)

    return (
        <div className={`${s.step}`} ref={$stepCont}>
            <div className={`${s.stepsLine}`} data-type='step' ref={$stepLineContainer}>

                <div className={s.stepPoint}>
                    {stepActive
                        ? <StepPointDone/>
                        : <StepPoint/>
                    }


                </div>
                {line ? (
                    <Line height={$stepLineContainer.current?.clientHeight}/>

                ) : ''}
                {line ? (
                    <div className={s.loadedLine}>
                        <LineDone height={loadedLineHeight}/>
                    </div>

                ) : ''}


            </div>

            <div className={s.content} data-type="roadmap-step-content">
                <h3 className={[titleUppercase && s.uppercase].join(' ')}><span>.{number} </span>{title}</h3>

                {Array.isArray(description)
                    ? description.map(d => (custom ? d : <p key={d}>{d}</p>))
                    : <p>{description}</p>}

            </div>
        </div>
    );
}

export default AppSectionRoadmapStep;