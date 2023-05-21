import React from 'react';
import Titles from './Titles';
import Image from './Image';

function LandingPage() {
  return (
    <div className='bg-gray-200 min-h-screen w-full flex justify-center items-center'>
        <div className=''>
          <div className='container grid grid-cols-1 gap-[5.5rem] md:gap-[1rem] md:grid-cols-5'>
            <div className='md:col-span-3'>
                <Titles />
            </div>
            <div className='md:col-span-2'>
              <Image />
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage