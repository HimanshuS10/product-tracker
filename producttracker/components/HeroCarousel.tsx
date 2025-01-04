'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';

const heroImages = [
    {
        imgUrl: '/assets/images/hero-1.svg', alt: 'hero image 1'
    },
    {
        imgUrl: '/assets/images/hero-2.svg', alt: 'hero image 1'
    },
    {
        imgUrl: '/assets/images/hero-3.svg', alt: 'hero image 1'
    },
    {
        imgUrl: '/assets/images/hero-4.svg', alt: 'hero image 1'
    },
    {
        imgUrl: '/assets/images/hero-5.svg', alt: 'hero image 1'
    },
]

const HeroCarousel = () => {
    return (
        <div className='hero-carousel'>
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={2000}
                showArrows={false}
                showStatus={false}
            >
                {heroImages.map((image) => (
                    <Image src={image.imgUrl} alt={image.alt}
                        width={484}
                        height={484}
                        className='object-contain'
                        key={image.alt} />
                ))}
            </Carousel>

            <Image 
                src="assets/icons/hand-drawn-arrow.svg"
                alt='arrow'
                width={16}
                height={16}
                className='max-xl:hidden absolute -left-[15%] bottom-0 z-0'
            />

        </div>
    )
}

export default HeroCarousel