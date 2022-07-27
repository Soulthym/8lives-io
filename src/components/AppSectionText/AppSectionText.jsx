import React from 'react';
import s from './AppSectionText.module.scss'

function AppSectionText({paragraphs}) {
    return (
        <div>
            {paragraphs.map((p, idx) => (
                <p key={p[2]+idx} className={s.text}>{p}</p>
            ))}
        </div>
    );
}

export default AppSectionText;