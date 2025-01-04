import React from 'react'
import Image from 'next/image'
import Searchbar from '@/components/Searchbar'
import HeroCarousel from '@/components/HeroCarousel'


const Home = () => {
  return (
    <>
      <section className='px-6 border-2 md:px-20 py-24'>
        <div className='flex max-xl:flex-col gap-16'>

          <div className='flex flex-col justify-center'>
            <p className='small-text'>
              Smart Shopping Starts Here:
              <Image
                src='/assets/icons/arrow-right.svg'
                alt='arrow right'
                width={16}
                height={16}
              />

            </p>
            <h1 className='head-text'>
              Unleah the power of
              <span className='text-primary'> PriceTracker!</span>
            </h1>
            <p className='mt-6s'>
              Powerful price tracking tools to help you make the best buying decisions.
            </p>

            <Searchbar />
          </div>
          <HeroCarousel />
        </div>
      </section>

      <section className='trending-section'>
        <h2 className='section-text'>Trending:</h2>

        <div className='flex flex-wrap gap-x-8 gap-y-16'>
          {['Apple Iphone 13', 'Samsung Galaxy S21', 'Sony WH-1000XM4'].map((product) => (
            <div>{product}</div>
          ))}
        </div>
      </section>
    </>

  )
}

export default Home