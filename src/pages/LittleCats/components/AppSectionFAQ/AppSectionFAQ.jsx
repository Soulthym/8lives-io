import React, {useEffect, useRef, useState} from 'react';
import s from './AppSectionFAQ.module.scss'
import AppSectionFAQQuestion from "../../../../components/AppSectionFAQQuestion/AppSectionFAQQuestion";
import {animateVisible} from "../../../../utils/animateVisible";
import AppSectionTitleAnimated from "../../../../components/AppSectionTitleAnimated/AppSectionTitleAnimated";

function AppSectionFAQ(props) {
    const [questions, setQuestions] = useState([
        {
            question: 'WHAT IS AN NFT?',
            answer: 'NFT stands for \'non-fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.',
            isOpen: false
        },
        {
            question: 'How Can I Buy a Little Cat NFT?',
            answer: 'The Little cats NFT are reserved for the holders of the Big Cats, and they will be available in free mint from June 15th.',
            isOpen: false
        },
        {
            question: 'WHAT DOES “MINT” MEAN?',
            answer: 'NFT Minting is the process by which your digital art or digital content becomes a part of the Ethereum blockchain.',
            isOpen: false
        },
        {
            question: 'HOW MUCH DOES IT COST BUY ONE OF THE LITTLE CAT?',
            answer: 'Little Cats NFT are free to mint for all Big cats holders.',
            isOpen: false
        },
        {
            question: 'WHY DID YOU CHOOSE LITTLE CATS',
            answer: 'Renowned artists Ricardo Cesar & Enrique Mateo-Sagasta have after weeks of work decided to use their knowledge and experience with major studios to bring a project that has never be seen before to the NFT space.',
            isOpen: false
        }
    ])

    const $questionsCont = useRef(null)

    let $questions = []
    let questionsLength

    const animate = () => {
        let activeAnimations = questionsLength

        $questions.forEach($q => {
            if (!$q.classList.contains('active')) {
                animateVisible({
                    visibleEl: $q,
                    animateEl: $q,
                    duration: 1,
                    animationName: 'fadeInUp__100',
                })
                activeAnimations -= 1
            }
        })

        if (activeAnimations === questionsLength) {
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
        $questions = [...$questionsCont.current.querySelectorAll(`[data-type="question"]`)]
        questionsLength = $questions.length
        animate()
        addEventListeners()
        return () => {
          removeEventListeners()
        }
    }, [])

    function toggle(idx) {
        const questionsCopy = [...questions]
        if (!questionsCopy[idx].isOpen) {
            const openQuestion = questionsCopy.find(q => q.isOpen === true)
            if (openQuestion) {
                openQuestion.isOpen = false
            }
        }
        questionsCopy[idx].isOpen = !questionsCopy[idx].isOpen
        setQuestions(questionsCopy)
    }

    return (
        <section className={s.section} id="faq">
            <div className={s.container}>
                <AppSectionTitleAnimated
                    name={'FAQs'}
                    title={'Frequently Asked Questions'}
                />
                <div className={s.questions} ref={$questionsCont}>
                    {questions.map((q, idx) => (
                        <div key={q.question} data-type="question">
                            <AppSectionFAQQuestion
                                question={q.question}
                                answer={q.answer}
                                isOpen={q.isOpen}
                                idx={idx}
                                toggle={toggle}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AppSectionFAQ;
