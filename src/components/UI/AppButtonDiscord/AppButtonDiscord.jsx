import React from 'react';
import s from './AppButtonDiscord.module.scss'
import Discord from "../icons/Discord";

function AppButtonDiscord({join = false}) {
    return (
        <a className={`${s.button} ${s.buttonMimas}`}
           rel="noreferrer"
           href="https://discord.com/invite/bigcats"
           target="_blank"
        >
            <span>
                <Discord/>
                {join ? 'Join Our' : ''} Discord
            </span>
        </a>
    );
}

export default AppButtonDiscord;