import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Gallery() {
  // Update this array with your image URLs
  const slides = [
    'https://www.cbit.ac.in/wp-content/uploads/2019/01/ABOUT_TAB-1-1-2048x864.jpeg',
    'https://www.cbit.ac.in/wp-content/uploads/2019/01/ABOUT_TAB-1-1-2048x864.jpeg',
    'https://www.cbit.ac.in/wp-content/uploads/2019/01/ABOUT_TAB-1-1-2048x864.jpeg',
    'https://www.cbit.ac.in/wp-content/uploads/2019/01/ABOUT_TAB-1-1-2048x864.jpeg',  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Set the time (in milliseconds) between each slide
  };

  return (
    <div className='space-y-8'>
      <div className='space-y-8'>
        <div className='font-display space-y-2'>
          <p className='text-black font-extrabold text-4xl'>Gallery</p>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-3 space-y-2'>
        <div className='col-span-2 border border-black min-h-[60vh] rounded-3xl p-5'>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className='flex justify-center items-center'>
                
                <img
                  src={slide}
                  alt={`slide-${index}`}
                  className='max-w-full max-h-full object-contain rounded-lg'
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
