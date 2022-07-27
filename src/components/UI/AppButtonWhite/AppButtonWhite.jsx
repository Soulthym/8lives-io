import React from 'react';
import s from './AppButtonWhite.module.scss'

function AppButtonWhite({children, to='', newTab=true, small=false, uppercase=true}) {
    return (
        <a
            className={[s.button, small && s.small, uppercase && s.uppercase].join(' ')}
            href={to}
            target={newTab ? '_blank' : '_self'}
        >
            {children}
        </a>
    );
}

export default AppButtonWhite;