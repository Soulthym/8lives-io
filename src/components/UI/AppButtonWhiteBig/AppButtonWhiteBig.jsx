import React from 'react';
import s from './AppButtonWhiteBig.module.scss'

function AppButtonWhiteBig({children, to=''}) {
    return (
        <a className={`${s.button}`}
           href={to}
           target="_blank"
           rel="noreferrer"
        >
            {children}
        </a>
    );
}

export default AppButtonWhiteBig;