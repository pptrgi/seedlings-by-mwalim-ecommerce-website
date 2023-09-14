import { useState } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { BiRightArrowAlt, BiCopy } from "react-icons/bi";
import { BsEnvelopeAt } from "react-icons/bs";

function ThreeMeans() {
  const [number, setNumber] = useState(0);
  const [copy, setCopy] = useState(false);

  const handleCopyNumber = (e) => {
    setNumber(254700119134);
    navigator.clipboard.writeText(number);
    setCopy(true);

    setTimeout(() => setCopy(false), 2000);
  };
  return (
    <div>
      <h3 className="text-titleColor text-normalFontSize font-mediumWeight mb-[0.5rem] text-center">
        Email | WhatsApp | Call
      </h3>
      <div className="flex flex-col space-y-6 items-center px-[1rem]">
        <div className="flex flex-col items-center space-y-2 py-[2rem] w-full border-b-[1px] border-b-gray-200">
          <span className="text-h3FontSize text-titleColor">
            <BsEnvelopeAt />
          </span>
          <span className="text-smallerFontSize font-mediumWeight text-titleColor">
            BY EMAIL
          </span>
          <span className="text-textColor text-smallerFontSize font-mediumWeight pb-[0.25rem]">
            pptrgitonga@gmail.com
          </span>
          <div className="group flex space-x-1 items-center py-2 px-4 border-[1px] border-gray-200 hover:border-ctaColor cursor-pointer">
            <a
              href="mailto:pptrgitonga@gmail.com"
              className="text-textColor text-smallerFontSize group-hover:text-ctaColor"
            >
              send email
            </a>
            <span className="text-textColor text-smallerFontSize group-hover:translate-x-1 group-hover:text-ctaColor">
              <BiRightArrowAlt />
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2 pb-[2rem] w-full border-b-[1px] border-b-gray-200">
          <span className="text-h3FontSize text-titleColor">
            <FaWhatsapp />
          </span>
          <span className="text-smallerFontSize font-mediumWeight text-titleColor">
            BY WHATSAPP
          </span>
          <span className="text-textColor text-smallerFontSize font-mediumWeight pb-[0.25rem]">
            254-700-119-134
          </span>
          <div className="group flex space-x-1 items-center py-2 px-4 border-[1px] border-gray-200 hover:border-ctaColor cursor-pointer">
            <a
              href="https://wa.me/254700119134"
              className="text-textColor text-smallerFontSize group-hover:text-ctaColor"
            >
              send text
            </a>
            <span className="text-textColor text-smallerFontSize group-hover:translate-x-1 group-hover:text-ctaColor">
              <BiRightArrowAlt />
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2 pb-[2rem] w-full border-b-[1px] border-b-gray-200">
          <span className="text-h3FontSize text-titleColor">
            <FaPhone />
          </span>
          <span className="text-smallerFontSize font-mediumWeight text-titleColor">
            BY PHONE CALL
          </span>
          <span className="text-textColor text-smallerFontSize font-mediumWeight pb-[0.25rem]">
            +254-700-119-134
          </span>
          {copy ? (
            <span
              onClick={(e) => setCopy(false)}
              className="text-ctaColor text-smallerFontSize font-mediumWeight py-2 px-4 cursor-pointer"
            >
              Copied!
            </span>
          ) : (
            <div
              onClick={handleCopyNumber}
              className="group flex space-x-1 items-center py-2 px-4 border-[1px] border-gray-200 hover:border-ctaColor cursor-pointer"
            >
              <span className="text-textColor text-smallerFontSize group-hover:-translate-x-1 group-hover:text-ctaColor">
                <BiCopy />
              </span>
              <span className="text-textColor text-smallerFontSize group-hover:text-ctaColor">
                copy number
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ThreeMeans;
