import React from 'react';
import s from './AppMain.module.scss'
import ToDown from "../../../../components/UI/icons/ToDown";
import AppButtonWhiteBig from "../../../../components/UI/AppButtonWhiteBig/AppButtonWhiteBig";

function AppMain(props) {
    return (
        <div>
            <main className={s.main}>
                <div className={s.container}>
                    <div className={s.content}>
                        <h1 className="animate__bounceInDown animation animate__duration-1500">THE <span
                            className="text-orange">BIG CATS</span></h1>
                        <div className={`${s.contentText} animate__fadeInUp__75  animation  animate__duration-1500`}>
                            <p>
                                The Big Cats NFT will produce a collection of 5000 pieces with each piece of their DNA
                                shared and protected via the Ethereum Blockchain.
                            </p>
                            <AppButtonWhiteBig
                                to="https://opensea.io/collection/big-cats-official-collection"
                            >
                                Buy on Opensea
                            </AppButtonWhiteBig>
                        </div>
                    </div>

                    <div className="animate__bounce animation animate__duration-1500 animate__infinite">
                        <ToDown/>
                    </div>
                </div>
                <div className={`${s.banner} `}>
                    <img src="/assets/big-cats/images/main/banner.png" alt=""
                         className={"animate__fadeInUpBig animation animate__duration-1750"}/>
                </div>
            </main>
        </div>

    );
}

export default AppMain;