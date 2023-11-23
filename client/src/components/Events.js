import React from 'react'


function About() {
  return (
    <div className='space-y-8'>
        <div className='font-display space-y-2  '>
          
          <p className='text-black font-extrabold text-4xl'>Events</p>
        </div>
        <div className=' grid  grid-cols-3  gap-3 space-x-2  '>
         
            <div className='border border-black   min-h-[50vh] rounded-3xl p-5 flex flex-col justify-end ' >
              <div className=' flex flex-col items-center text-center space-y-6 '> 
                      <div className='space-y-1 flex flex-col items-center '>
                      <p className='font-semibold text-lg text-white '>Be a mentor</p>
                      <p className='text-white  font-light text-wrap w-4/5 '> give mentorship to students</p>
                      </div>
                      <button className='bg-[#971B1E] text-white py-3 border rounded-lg px-6 mt-2'>
                        Join now!
                      </button>
              </div>

            </div>
            <div className='border border-black  min-h-[50vh] rounded-3xl p-5 flex flex-col justify-end  ' >

            <div className=' flex flex-col items-center text-center space-y-6 '> 
                      <div className='space-y-6 flex flex-col items-center '>
                      <p className='font-semibold text-lg text-white '>Share achivements</p>
                      <p className='text-white  font-light text-wrap w-4/5 '> share your achivements</p>
                      </div>
                      <button className='bg-[#971B1E] text-white py-3 border rounded-lg px-6 mt-2'>
                        Join now!
                      </button>
              </div>

            </div>
            <div className='border border-black  min-h-[50vh] rounded-3xl p-5 flex flex-col justify-end  ' >
            <div className=' flex flex-col items-center text-center space-y-6 '> 
                      <div className='space-y-1 flex flex-col items-center '>
                      <p className='font-semibold text-lg text-white '>share opportunities</p>
                      <p className='text-white font-light  text-wrap w-4/5 '> Help students grow</p>
                      </div>
                      <button className=' bg-[#971B1E] text-white py-3 border rounded-lg px-6 mt-2'>
                      Join now!
                      </button>
              </div>

            </div>
        </div>

    </div>
  )
}

export default About