import React from 'react'

function Image() {
  return (
    <div>
        <div className='h-full w-full overflow-hidden md:block'>
            <img src="/images/giveSeedling.png" className='object-cover opacity-90' alt="LandingPageGiveSeedlings" loading='priority'/>
        </div>
    </div>
  )
}

export default Image