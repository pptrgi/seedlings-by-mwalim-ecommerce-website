import {useRef, useEffect} from 'react'
import Typed from 'typed.js'

function Titles() {
  const typedRef = useRef(null)
  
  useEffect(() => {
    const options = {
      strings: ['SEASON', 'PLANTS', 'YIELDS'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className='text-left'>
      <h3 className='text-h3FontSize text-titleColor md:text-h2FontSize'>Seedlings Species 2023</h3>
      <h1 className='text-h1FontSize font-semiBolded text-titleColor mt-[0.5rem] mb-[2rem] md:text-bigFontSize'>NEW <span ref={typedRef}></span></h1>
      <a href='#products' className='px-[2rem] py-[0.75rem] bg-ctaColor text-bodyColor text-normalFontSize rounded-full cursor-pointer'>PLANT NOW</a>
    </div>
  )
}

export default Titles