import React, {useRef} from 'react';
import s from './AppSectionArtists.module.scss'
import AppSectionArtistsCard from "../../../../components/AppSectionArtistsCard/AppSectionArtistsCard";
import AppSectionTitleAnimated from "../../../../components/AppSectionTitleAnimated/AppSectionTitleAnimated";

function AppSectionArtists(props) {
    const $imageContainer = useRef(null)

    return (
        <section className={s.section} id="artists">
            <div className={s.overlay} />
            <div className={s.container}>
                <AppSectionTitleAnimated
                    name={'Artists'}
                    title={'Meet The Artists'}
                />
                <div className={s.artists} ref={$imageContainer}>
                    <AppSectionArtistsCard
                        imgSrc="/assets/big-cats/images/artists/artist-2.jpg"
                        name="Enrique Mateo-Sagasta"
                        description="Enrique has been trusted to work on culture-shifting projects like Star Wars, X-Men, and Men in Black, to name a few. His artistry will bring a quality to the Big Cats that will allow you to attract awe and envy throughout the Metaverse."
                        linkedin="https://www.linkedin.com/in/enrique-a-mateo-sagasta-26962753?originalSubdomain=ca"
                        imdb="https://m.imdb.com/name/nm8886122/"
                        link="https://www.enriquesagasta.com/professional"
                    />
                    <AppSectionArtistsCard
                        imgSrc="/assets/big-cats/images/gallery/img-9.jpg"
                        name="Ricardo Cesar"
                        description="Avengers. Thor. The Fast & Furious. Aquaman. If you've ever seen these forces of nature, you've seen Ricardo's work. Ricardo is responsible for some of the most culturally significant work of the 21st century — and now he is turning his considerable attention to producing Big Cats."
                        linkedin="https://www.linkedin.com/in/ricardo-ribeiro-02305b61/"
                        imdb="https://www.imdb.com/name/nm11943740/?ref_=nv_sr_srsg_7"
                        link="https://www.ricardocesar.com/"
                    />
                </div>
            </div>
        </section>
    );
}

export default AppSectionArtists;