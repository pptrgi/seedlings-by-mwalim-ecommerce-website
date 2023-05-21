import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function DirectContact() {
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xcqtt9b', 'template_dwk3grp', form.current, 'fKjM8gV9AD2Vje01P')
 
      e.target.reset()
  };
  
  return (
    <div>
      <h3 className='text-titleColor text-normalFontSize font-mediumWeight mb-[0.5rem] text-center'>Direct Message</h3>
      <div className='border-[1px] border-gray-200 rounded-[1rem] px-[2rem] py-[2rem]'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='flex flex-col space-y-4 items-center'>
            <div className='flex flex-col space-y-1 items-start w-full'>
              <label htmlFor="name" className='text-smallerFontSize text-textColor font-normalWeight'>Name</label>
              <input type="text" name="name" className='text-smallerFontSize text-textColor px-[0.5rem] py-[0.5rem] rounded-md border-[1px] border-gray-200 hover:border-ctaColor focus:border-ctaColor hover:outline-none focus:outline-none w-full' placeholder='e.g. Peter Gitonga' required/>
            </div>
            <div className='flex flex-col space-y-1 items-start  w-full'>
              <label htmlFor="email" className='text-smallerFontSize text-textColor font-normalWeight'>Email</label>
              <input type="text" name="email" className='text-smallerFontSize text-textColor px-[0.5rem] py-[0.5rem] rounded-md border-[1px] border-gray-200 hover:border-ctaColor focus:border-ctaColor hover:outline-none focus:outline-none w-full' placeholder='example@email.com' required/>
            </div>
            <div className='flex flex-col space-y-1 items-start  w-full'>
              <label htmlFor="message" className='text-smallerFontSize text-textColor font-normalWeight'>Your Message</label>
              <textarea rows={5} name="message" className='text-smallerFontSize text-textColor px-[0.5rem] py-[0.5rem] rounded-md border-[1px] border-gray-200 hover:border-ctaColor focus:border-ctaColor hover:outline-none focus:outline-none w-full resize-none' placeholder='e.g. This is the example message.' required/>
            </div>
            <div className='pt-[2rem] pb-[1rem]'>
              <button type='submit' className='font-mediumWeight text-whiteColor bg-ctaColor px-[1.5rem] py-[0.75rem] text-smallFontSize hover:bg-titleColor'>Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DirectContact