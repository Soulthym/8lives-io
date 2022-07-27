import React from 'react';
import AppSectionTitle from "../AppSectionTitle/AppSectionTitle";
import AppSectionText from "../AppSectionText/AppSectionText";
import AppSectionTitleAnimated from "../AppSectionTitleAnimated/AppSectionTitleAnimated";
import AppSectionTextAnimated from "../AppSectionTextAnimated/AppSectionTextAnimated";
function AppSectionTextContent({name, title, paragraphs, animate=true, children}) {

    return (
        <div>
            {animate ? <AppSectionTitleAnimated name={name} title={title}/>
            : <AppSectionTitle name={name} title={title}/>}

            {animate ? (<AppSectionTextAnimated paragraphs={paragraphs}>{children}</AppSectionTextAnimated>)
                :< AppSectionText paragraphs={paragraphs}>{children}</AppSectionText>}
        </div>
    );
}

export default AppSectionTextContent;