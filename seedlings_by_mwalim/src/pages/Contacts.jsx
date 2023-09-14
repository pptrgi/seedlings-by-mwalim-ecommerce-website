import React from "react";
import ThreeMeans from "../components/contacts/ThreeMeans";
import DirectContact from "../components/contacts/DirectContact";

function Contacts() {
  return (
    <div className="pt-[6rem] pb-[2rem]">
      <h2 className="text-h3FontSize text-center font-mediumWeight mb-[0.5rem]">
        Let's Chat
      </h2>
      <div className=" flex justify-center items-center">
        <p className="text-smallerFontSize text-textColor font-normalWeight max-w-sm text-center leading-tight px-4 lg:max-w-md">
          Hi, you can use the contact form to talk to us directly from here, or
          send Email, Whatsapp message, and copy number to make a phone Call.
        </p>
      </div>
      <div className="container pt-[4rem]">
        <div className="grid grid-cols-1 gap-[2rem] items-start sm:grid-cols-2 sm:gap-[2rem]">
          <div>
            <ThreeMeans />
          </div>
          <div>
            <DirectContact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
