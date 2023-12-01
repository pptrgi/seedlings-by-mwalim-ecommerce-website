import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

import seedlingsLogo from "/images/logos/seedlingsLogo.png";
import LipaNaMpesaLogo from "/images/logos/LipaNaMpesaLogo.png";

function Footer() {
  return (
    <div className="bg-whiteColor border-t-2 border-t-gray-200">
      <div className="container flex flex-col justify-between items-center pt-[4rem] pb-[6rem] lg:items-start lg:h-0 lg:flex-row">
        <div className="flex flex-col items-center">
          <h3 className="font-mediumWeight text-h3FontSize mb-[2rem] tracking-wide">
            SEEDLINGS BY MWALIM
          </h3>
          <span className=" text-textColor tracking-wide mb-[1rem] max-w-[250px] sm:max-w-sm text-center lg:max-w-[250px]">
            Get more than just seedlings from Seedlings By Mwalim this Season!
          </span>
          <span className="text-textColor font-mediumWeight">
            MPesa Till Number: 865929
          </span>
          <div className="flex justify-center items-center space-x-1 sm:space-x-2 py-[1rem]">
            <img
              src={seedlingsLogo}
              className="w-28 h-[3rem]"
              alt="SeedlingsByMwalimLogo"
            />
            <img
              src={LipaNaMpesaLogo}
              className="w-36 h-[4rem]"
              alt="LipaNaMpesaLogo"
            />
          </div>
        </div>
        <div className="flex justify-between items-start w-full sm:w-1/2 lg:w-3/12">
          <div className="flex flex-col items-start">
            <h4 className="font-mediumWeight text-normalFontSize mb-[0.75rem]">
              CATEGORIES
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="#products"
                className="text-textColor hover:text-titleColor"
              >
                Fruits
              </a>
              <a
                href="#products"
                className="text-textColor hover:text-titleColor"
              >
                Trees
              </a>
              <a
                href="#products"
                className="text-textColor hover:text-titleColor"
              >
                Flowers
              </a>
              <a
                href="#products"
                className="text-textColor hover:text-titleColor"
              >
                Vegetables
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="font-mediumWeight text-normalFontSize mb-[0.75rem]">
              QUICK LINKS
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/contacts"
                className="text-textColor hover:text-titleColor"
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="text-textColor hover:text-titleColor"
              >
                Login
              </Link>
              <Link to="/cart" className="text-textColor hover:text-titleColor">
                Cart
              </Link>
              <Link to="/" className="text-textColor hover:text-titleColor">
                Home
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-[3rem] mt-[2rem]">
          <div className="flex flex-row justify-center space-x-4 sm:space-x-4">
            <a href="https://twitter.com/ptrgitonga">
              <RiTwitterXFill
                size={18}
                className="text-titleColor hover:text-ctaColor"
              />
            </a>
            <a href="https://www.linkedin.com/in/petergitonga">
              <BsLinkedin
                size={18}
                className="text-titleColor hover:text-ctaColor"
              />
            </a>
            <a href="https://wa.me/254700119134">
              <BsWhatsapp
                size={18}
                className="text-titleColor hover:text-ctaColor"
              />
            </a>
            <a href="https://www.facebook.com/pptrgitonga">
              <BsFacebook
                size={18}
                className="text-titleColor hover:text-ctaColor"
              />
            </a>
          </div>
          <span className="text-textColor text-smallFontSize">
            Copyright &#169; 2023. Developed by{" "}
            <a
              href="https://pgitonga.vercel.app"
              className="font-semiBolded text-ctaColor underline underline-offset-2 hover:text-titleColor"
            >
              Peter Gitonga
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
