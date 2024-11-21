import React from 'react'
import Button from '../components/Button'

import Star from "../components/Star";

const Offers = () => {
  return (
    <section className='w-[100vw] h-[80vh] max-sm:h-[130vh] max-md:h-[88vh] bg-gradient-to-r from-yellow/70 to-yellow/100 mt-10 overflow-hidden'>
    {/* stars starts here  */} 
            <Star className="relative top-32 left-10 max-sm:top-28 max-sm:left-24" />
            <Star className="relative -top-3 left-[35rem] max-sm:hidden" />
            <Star className="relative left-[39rem] top-[30rem] max-sm:hidden" />
          {/* stars ends here  */}

      <div className="flex gap-10 w-full max-sm:flex-col justify-evenly">
        <div className='max-sm:w-[90%] max-sm:border-8 max-sm:rounded-lg max-sm:border-white max-md:w-[100%] mt-0 -ml-36 max-sm:ml-4'>
            <img src="/yellowGirl.png" alt="girl" className='w-full -mb-1' />
        </div>
        
        <div className="content ml-5 space-y-5 mt-0 max-sm:ml-52 md:mr-40">
            <div className="max-md:-ml-28 max-md:text-7xl text-8xl font-semibold w-60 space-y-3 max-sm:text-6xl"> 
                <h2 className="bg-[url('/Rectangle-w2.png')] bg-center bg-cover bg-no-repeat font-bold">PAYDAY</h2> 
                <h2 className='whitespace-nowrap font-bold'>SALE NOW</h2>
            </div>
            <div className="discription w-80 space-y-7 ">
                <h1 className='max-md:-ml-28 w-80'> 
                    Spend minimal $100 get 30% off
                    voucher code for your next purchase
                </h1>
                <div className='max-md:-ml-28'>
                    <h1 className="font-semibold">1 June - 10 June 2024</h1>
                    <p>*Terms & Conditions apply</p>
                </div>
                <Button className={`w-32 h-[47px] max-md:-ml-28`}>Shop Now</Button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Offers
