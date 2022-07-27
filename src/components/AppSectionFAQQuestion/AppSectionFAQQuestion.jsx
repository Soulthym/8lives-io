import React from 'react';
import s from './AppSectionFAQQuestion.module.scss'
import Up from "../UI/icons/Up";
import Down from "../UI/icons/Down";


function AppSectionFAQQuestion({question, answer, isOpen, idx, toggle}) {
    return (
        <div className={s.container}>
            <div className={s.question}>
                <h6>{question}</h6>
                <div className={s.toggle} onClick={() => toggle(idx)}>
                    {isOpen ? <Up/> : <Down/>}
                </div>
            </div>
            {isOpen ? ( <div className={s.answer}><p>{answer}</p></div>) : null}
        </div>
    );
}

export default AppSectionFAQQuestion;