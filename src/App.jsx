import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Partners from './sections/Partners'
import NewArrivals from './sections/NewArrivals'
import Offers from './sections/Offers'
import YoungFavourite from './sections/YoungFavourite'
import DownloadApp from './sections/DownloadApp'
import ShopingCommunity from './sections/ShopingCommunity'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='overflow-hidden'>
      <Header/>
      <Hero/>
      <Partners/>
      <NewArrivals/>
      <Offers/>
      <YoungFavourite/>
      <DownloadApp/>
      <ShopingCommunity/>
      <Footer/>
    </main>
  )
}

export default App
