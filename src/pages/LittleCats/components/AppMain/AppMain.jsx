import React from 'react'
import s from './AppMain.module.scss'
import ToDown from '../../../../components/UI/icons/ToDown'
import AppButtonDiscord from '../../../../components/UI/AppButtonDiscord/AppButtonDiscord'

function AppMain(props) {
  return (
    <div>
      <main className={s.main}>
        <div className={s.container}>
          <div className={s.content}>
            <h1 className="animate__bounceInDown animation animate__duration-1500">THE <span
              className="text-orange">LITTLE CATS</span></h1>
            <div className={`${s.contentText} animate__fadeInUp__75  animation  animate__duration-1500`}>
              <p>
                The Little Cats NFT will be released in the wildlife with each piece of their DNA shared and protected
                via the Ethereum Blockchain.
              </p>
              <AppButtonDiscord join={true} />
            </div>
          </div>

          <div className="animate__bounce animation animate__duration-1500 animate__infinite">
            <ToDown />
          </div>
        </div>
        <div className={`${s.banner} `}>
          <img src="/assets/little-cats/images/main/banner.jpg" alt=""
               className={'animate__fadeInUpBig animation animate__duration-1750'} />
        </div>
      </main>
    </div>

  )
}

export default AppMain
