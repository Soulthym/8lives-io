import React from 'react';
import s from './AppSectionTitle.module.scss'
import TwoLines from "../UI/icons/TwoLines";

function AppSectionTitle({name, title}) {
    return (
        <div className={`${s.container}`}>
            <div>
                <span className={`${s.name}`}>{name}</span>
                <TwoLines/>
            </div>
            <h2 className={s.title}> {title} </h2>
        </div>


    );
}

export default AppSectionTitle;