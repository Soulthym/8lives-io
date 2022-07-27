import React, {useEffect, useState} from 'react';
import s from './AppHeader.module.scss'
import Instagram from "../../../../components/UI/icons/Instagram";
import Twitter from "../../../../components/UI/icons/Twitter";
import MenuBurger from "../../../../components/UI/icons/MenuBurger";
import Close from "../../../../components/UI/icons/Close";
import {getCoords, scrollToSmoothly, smoothScrollTo,} from "../../../../utils/smootScroll";
import {isSafari} from "react-device-detect";
import AppButtonWhite from "../../../../components/UI/AppButtonWhite/AppButtonWhite";
import Discord from "../../../../components/UI/icons/Discord";

function AppHeader(props) {
    const [showMobileNav, setShowMobileNav] = useState(false)
    const [positions, setPositions] = useState({})

    const scrollTo = (name) => {
        if (isSafari) {
            smoothScrollTo( document.documentElement, positions[name] - 100, 1350)
        } else {
            scrollToSmoothly( positions[name] - 100, 1)
        }
    }

    useEffect(() => {
        setPositions({
            about_us:  getCoords(document.querySelector(`#about_us`)).top,
            features:  getCoords(document.querySelector(`#features`)).top,
            roadmap:  getCoords(document.querySelector(`#roadmap`)).top,
            artists:  getCoords(document.querySelector(`#artists`)).top,
            faq:  getCoords(document.querySelector(`#faq`)).top,
        })
    }, [])

    return (
        <div>
            <div className={s.fh} />
            <header className={s.header}>
                <div className={s.container}>
                    <div className={s.logo}>
                        <a href="/#"><img src="/assets/big-cats/images/logo.png" alt=""/></a>
                    </div>

                    <nav className={s.nav}>
                        <ul>
                            <li><a onClick={() => scrollTo('about_us')}>About</a></li>
                            <li><a onClick={() => scrollTo('features')}>Features</a></li>
                            <li><a onClick={() => scrollTo('roadmap')}>Roadmap</a></li>
                            <li><a onClick={() => scrollTo('artists')}>Artists</a></li>
                            <li><a onClick={() => scrollTo('faq')}>FAQ</a></li>
                        </ul>
                    </nav>

                    <div className={s.rightMenu}>
                        <div className={s.socialsContainer}>
                            <ul className={s.socials}>
                                <li><a href="https://discord.com/invite/bigcats" target="_blank" rel="noreferrer"><Discord/></a></li>
                                <li><a href="https://mobile.twitter.com/bigcats_nft" target="_blank" rel="noreferrer"><Twitter /></a></li>
                                <li><a href="https://instagram.com/bigcats.nft?utm_medium=copy_link" target="_blank" rel="noreferrer"><Instagram/></a></li>
                            </ul>
                            <AppButtonWhite
                                to="/littlecats"
                                newTab={false}
                                small
                            >
                                Little cats
                            </AppButtonWhite>
                        </div>

                        <div>
                            <button className={s.mobileMenu} onClick={() => setShowMobileNav(true)}>
                                <MenuBurger />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`${s.mobileNav} ${showMobileNav ? s.active : ''}`}>
                <div className={s.mobileNavHeader}>
                    <button className={s.btnIcon} onClick={() => setShowMobileNav(false)}><Close/></button>
                </div>
                <nav>
                    <ul>
                        <li><a href="/#about_us" onClick={() => setShowMobileNav(false)}>About</a></li>
                        <li><a href="/#features" onClick={() => setShowMobileNav(false)}>Features</a></li>
                        <li><a href="/#roadmap" onClick={() => setShowMobileNav(false)}>Roadmap</a></li>
                        <li><a href="/#artists" onClick={() => setShowMobileNav(false)}>Artists</a></li>
                        <li><a href="/#faq" onClick={() => setShowMobileNav(false)}>FAQ</a></li>
                    </ul>
                </nav>
                <div className={s.mobileSocialsContainer}>
                    <ul className={s.socials}>
                        <li><a href="https://discord.com/invite/bigcats" target="_blank" rel="noreferrer"><Discord/></a></li>
                        <li><a href="https://mobile.twitter.com/bigcats_nft" target="_blank" rel="noreferrer"><Twitter /></a></li>
                        <li><a href="https://instagram.com/bigcats.nft?utm_medium=copy_link" target="_blank" rel="noreferrer"><Instagram/></a></li>
                    </ul>
                    <AppButtonWhite
                        to="/littlecats"
                        newTab={false}
                        small
                    >
                        Little cats
                    </AppButtonWhite>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;