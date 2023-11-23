import React from 'react';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Newsletter from '../components/Newsletter';

function Home() {
  return (
    <div className='px-52 space-y-8 '>
      <div
        className="relative bg-cover bg-center h-[80vh] border border-black rounded-[2rem] p-14 text-white bg-fixed"
        style={{
          backgroundImage: 'url(https://www.cbit.ac.in/wp-content/uploads/2019/01/ABOUT_TAB-1-1-2048x864.jpeg)',
        }}
      >
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className='mt-48'>
        {/* Overlay with Reduced Opacity */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 space-y-6 "></div>

        {/* Content */}
        <div className='w-1/2 space-y-6 relative z-10'>
          <h1 className='text-5xl font-bold'>Welcome to the Alumni network of CBIT</h1>
          <p>Whether you graduated yesterday or decades ago, you are always part of the CBIT family</p>
        </div>

        {/* Buttons */}
        <div className='flex space-x-6  relative z-10 mt-5'>
          <button className='bg-[#971B1E] py-[0.5em] px-6 rounded-lg text-white'>Get started!</button>
          <button className='bg-[#971B1E] py-[0.5em] px-6 rounded-lg'>Explore</button>
        </div>
        </div>
      </div>

      <Events/>
      <Gallery />
      <Newsletter />
    </div>
  );
}

export default Home;
