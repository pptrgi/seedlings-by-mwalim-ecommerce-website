import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

function DirectContact() {
  const seedlingsForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        seedlingsForm.current,
        `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`
      )
      .then(() => {
        e.target.reset();
        toast.success("Your message has been sent");
      })
      .catch((err) => {
        toast.error("Message not sent, try resending");
      });
  };

  return (
    <div>
      <h3 className="text-titleColor text-normalFontSize font-mediumWeight mb-[0.5rem] text-center">
        Direct Message
      </h3>
      <div className="border-[1px] border-gray-200 rounded-[1rem] px-[1.5rem] py-[2rem] sm:px-[2rem]">
        <form ref={seedlingsForm} onSubmit={sendEmail}>
          <div className="flex flex-col space-y-4 items-center w-full">
            <div className="flex flex-col space-y-1 items-start w-full">
              <label className="text-smallerFontSize text-textColor font-normalWeight">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="text-smallerFontSize text-textColor px-[0.5rem] py-[0.5rem] rounded-md border-[1px] border-gray-200 hover:border-ctaColor focus:border-ctaColor hover:outline-none focus:outline-none w-full"
                placeholder="e.g. Peter Gitonga"
                required
              />
            </div>
            <div className="flex flex-col space-y-1 items-start  w-full">
              <label className="text-smallerFontSize text-textColor font-normalWeight">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="text-smallerFontSize text-textColor px-[0.5rem] py-[0.5rem] rounded-md border-[1px] border-gray-200 hover:border-ctaColor focus:border-ctaColor hover:outline-none focus:outline-none w-full"
                placeholder="example@email.com"
                required
              />
            </div>
            <div className="flex flex-col space-y-1 items-start  w-full">
              <label className="text-smallerFontSize text-textColor font-normalWeight">
                Your Message
              </label>
              <textarea
                rows={6}
                name="message"
                className="text-smallerFontSize text-textColor px-[0.5rem] py-[0.5rem] rounded-md border-[1px] border-gray-200 hover:border-ctaColor focus:border-ctaColor hover:outline-none focus:outline-none w-full resize-none"
                placeholder="e.g. This is the example message."
                required
              />
            </div>
            <div className="flex justify-end items-start w-full pt-[2rem] pb-[1rem]">
              <button
                type="submit"
                className="font-mediumWeight text-whiteColor bg-ctaColor rounded-sm px-[1.5rem] py-[0.75rem] text-smallFontSize hover:bg-titleColor"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default DirectContact;
