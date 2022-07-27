import React, {useEffect, useRef, useState} from 'react';
import s from './AppSectionRoadmap.module.scss'
import AppSectionRoadmapStep from "../../../../components/AppSectionRoadmapStep/AppSectionRoadmapStep";
import {animateVisible} from "../../../../utils/animateVisible";
import AppSectionTitleAnimated from "../../../../components/AppSectionTitleAnimated/AppSectionTitleAnimated";

function AppSectionRoadmap(props) {
    const [roadmapData, setRoadmapData] = useState([
        {
            number: '01',
            title: 'CREATION OF THE BIG CATS (Archived)',
            description: `Each of the 5209 rare and majestic NFT pieces was created with the same imagination and detail that our artists created on the blockbuster screen. All the features are authentic, so that each Big Cat scares the weak creatures of the Metaverse. The demand for Big Cats has been enormous.`,
            uppercase: false
        },
        {
            number: '02',
            title: 'THE BIG CATS START TO CONQUER THE METAVERSE (Archived)',
            description: `With their pedigree and majesty, demand for the Big Cats has been overwhelming — unfortunately, we choose to only maintain their extreme quality for a limited run. Only 5209 wise investors are able to own a Big Cat. The focus on quality art and building a healthy community has attracted over 250,000 members.`,
            uppercase: false
        },
        {
            number: '03',
            title: 'INTRODUCING THE KINGS OF THE PRIDE (Archived)',
            description: `Every great art collection has a centerpiece. We had introduced the Kings of Pride. These alpha Big Cats are the **legendary**, truly rare cats designed by our artists who had full authority to create with maximum ferocity and creativity. The Kings of the Pride are an ultra-exclusive meta-collection within an already special collection. By bringing renewed interest to the collection, new investors have been forced to pay attention.`,
            uppercase: false
        },
        {
            number: '04',
            title: 'GIVING POWER BACK TO THE PRIDE',
            description: [
                'Big Cats always look after their own, and so we want to give back to the real cats of the world with a large donation to help preserve their habitat. In Stage 4, we commit to sharing $50,000 to two different charities. They protect Big Cats in tropical environments.',
                'We sincerely wish to help these stately creatures and ensure their survival for generations to come.You will have the power to choose where to make the donations. (To involve and empower all the holders, you will help us choose the associations.)'
            ],
        },
        {
            number: '05',
            title: 'JUNGLE NETWORK',
            description: `Big Cats is an NFT collection, you are right, but it is also a strong community. We know how powerful a community can be when it's strong. We want everyone who has a business, a youtube channel, an instagram account, to be helped by the community. We will feature those who have the most interesting projects. You will be able to talk about your business, find more customers, create ideas and projects with other Big Cats owners. It will turn into a truly powerful network.`,
        },
        {
            number: '06',
            title: 'MERCH',
            description: `We want this project to be more than just an NFT collection, we want it to become a real community. For this, we will make merchandising. They will be reserved for the owners. The goal is to create a real exclusive community. You and only you can wear it and express that you are part of the Big Cats family.`,
        },
        {
            number: '07',
            title: 'THE BIG CATS EVOLVE TO THEIR FINAL FORM ',
            description: `We want to give you much more than the current JPG of an NFT. At stage 7, we will publish a few 3D files that you can use in the metaverse. You will have full rights on them, you can customize them, recreate your Big Cats or even create an original one.`,
        },
        {

        number: '08',
            title: 'BIG CATS JOINING THE METAVERSE',
            description:[
                (<p key={'08_1'}>Big Cats are great, Big Cats are powerful, Big Cats are strong. <br/>
                    Now the Big Cats need a playground. To meet, to enjoy, to play games and to chill. After talking with you and receiving your valuable ideas, we want to buy land in the metaverse and turn it into an incredible jungle for our holders. (You will decide through a poll in which metaverse you want the big cats to evolve).
                </p>),
                (<p key={'08_2'}>This will be one of the highlights of our project and also one of the most exciting parts. The freedom of creation and expression to create this jungle will be incredible. The territory of the Big Cats in the metaverse will be one of the most beautiful playgrounds. </p>)
            ],
            custom: true
        },
        {
            number: '09',
            title: 'THE LITTLE CATS TO BRING JOY IN THIS WORLD',
            description: `With their kindness, cerebral naivety and a touch of carefreeness, they will bring joy to our Big Cats world. At this point, we truly believe that the project will be strong enough to launch Little Cats. You will then have a complete collection, with 2 NFTs inside; one Big Cats and one Little Cats. The launch will only take place when the optimal conditions are met to benefit the entire Big Cats project. `,
        },
    ])

    const $stepsCont = useRef(null)
    let $steps = []
    let stepsLength
    let $stepsContent = []


    const animate = () => {
        let activeAnimations = stepsLength
        $steps.forEach(($s, idx) => {
            if (!$stepsContent[idx].classList.contains('active')) {
                animateVisible({
                    visibleEl: $s,
                    animateEl: $stepsContent[idx],
                    duration: 1,
                    visiblePart: 0.2,
                    animationName: 'fadeInUp__50',
                    presetClass: 'fadeInUp__50__preset'
                })
                activeAnimations -= 1
            }
        });
        if (activeAnimations === stepsLength) {
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
        addEventListeners()
        $steps = [...$stepsCont.current.querySelectorAll(`[data-type="step-cont"]`)]
        stepsLength = $steps.length
        $stepsContent = $stepsCont.current.querySelectorAll(`[data-type="roadmap-step-content"]`)
        animate()
        return () => {
          removeEventListeners()
        }
    }, [])


    return (
        <section className={s.section} id="roadmap">
            <div className={s.container}>
                <AppSectionTitleAnimated
                    name={'Roadmap'}
                    title={'We Have big plans for Big Cats'}
                />

                <div className={s.steps} ref={$stepsCont}>
                    {roadmapData.map((st, idx) => (
                        <div key={st.number} className={s.stepCont} data-type="step-cont">
                                <AppSectionRoadmapStep
                                    number={st.number}
                                    title={st.title}
                                    description={st.description}
                                    line={roadmapData.length-1 > idx}
                                    titleUppercase={st.uppercase ?? true}
                                    custom={st.custom ?? false}
                                />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default AppSectionRoadmap;