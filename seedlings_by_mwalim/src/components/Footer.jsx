import { Link } from "react-router-dom";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

import seedlingsLogo from "/images/logos/seedlingsLogo.png";
import LipaNaMpesaLogo from "/images/logos/LipaNaMpesaLogo.png";

function Footer() {
  return (
    <footer className="bg-whiteColor text-textColor border-t-2 border-t-gray-200/40">
      <div className="container">
        <div className="grid grid-cols-1 w-full pt-[3rem] pb-[4rem] items-center gap-[3rem] lg:grid-cols-12 lg:gap-[2rem] lg:pt-[3.5rem] lg:pb-[5rem]">
          <div className="col-span-1 lg:col-span-5">
            <div className="flex flex-col gap-[2rem] items-center">
              <div className="flex flex-col gap-[0.75rem] items-center">
                <h2 className="font-semiBolded text-h3FontSize text-titleColor tracking-tight sm:text-h2FontSize">
                  Seedlings By Mwalim
                </h2>
                <p className="tracking-wide text-center max-w-[350px]">
                  Get more than just seedlings from Seedlings By Mwalim this
                  Season!
                </p>
              </div>
              <div className="flex flex-col gap-[1rem] items-center">
                <p className="font-mediumWeight">
                  MPesa Till Number:{" "}
                  <span className="font-semiBolded">865929</span>
                </p>
                <div className="flex justify-center items-center gap-x-[0.5rem] sm:gap-x-[0.75rem]">
                  <img
                    src={seedlingsLogo}
                    className="w-28 h-[3rem]"
                    alt="Seedlings by Mwalim"
                  />
                  <img
                    src={LipaNaMpesaLogo}
                    className="w-36 h-[4rem]"
                    alt="Lipa na Mpesa"
                  />
                </div>
                <div>
                  <p className="text-center">
                    Copyright &#169; 2023. Developed by{" "}
                    <a
                      href="https://pgitonga.vercel.app"
                      className="font-semiBolded text-ctaColor hover:text-titleColor"
                    >
                      Peter Gitonga
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-4">
            <div className="flex justify-center items-center">
              <div className="flex justify-between w-full items-center sm:w-3/4 lg:w-auto lg:justify-center lg:gap-[4rem]">
                <div className="flex flex-col gap-[0.5rem] items-start">
                  <h4 className="font-mediumWeight text-titleColor text-normalFontSize uppercase">
                    Categories
                  </h4>
                  <div className="flex flex-col gap-[0.5rem]">
                    <a href="#products" className="hover:text-titleColor">
                      Fruits
                    </a>
                    <a href="#products" className="hover:text-titleColor">
                      Trees
                    </a>
                    <a href="#products" className="hover:text-titleColor">
                      Flowers
                    </a>
                    <a href="#products" className="hover:text-titleColor">
                      Vegetables
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-[0.5rem] items-start">
                  <h4 className="font-mediumWeight text-titleColor text-normalFontSize uppercase">
                    Quick Links
                  </h4>
                  <div className="flex flex-col gap-[0.5rem]">
                    <Link to="/" className="hover:text-titleColor">
                      Home
                    </Link>
                    <Link to="/cart" className="hover:text-titleColor">
                      Cart
                    </Link>
                    <Link to="/contacts" className="hover:text-titleColor">
                      Contact
                    </Link>
                    <Link to="/login" className="hover:text-titleColor">
                      Signin
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <div className="flex flex-col gap-[1.25rem] items-center">
              <div className="flex gap-[1rem] items-center">
                <a href="https://twitter.com/ptrgitonga">
                  <RiTwitterXFill className="text-h3FontSize hover:text-titleColor" />
                </a>
                <a href="https://www.linkedin.com/in/petergitonga">
                  <BsLinkedin className="text-h3FontSize hover:text-titleColor" />
                </a>
                <a href="https://wa.me/254700119134">
                  <BsWhatsapp className="text-h3FontSize hover:text-titleColor" />
                </a>
                <a href="https://www.facebook.com/pptrgitonga">
                  <BsFacebook className="text-h3FontSize hover:text-titleColor" />
                </a>
              </div>
              <div className="flex gap-[0.25rem] items-center">
                <a href="https://buymeacoffee.com/ptrgitonga">
                  <img
                    src="/images/logos/buymeacoffee_full_logo.svg"
                    className="h-[25px] lg:max-w-[120px]"
                    alt="Buy Peter a Coffee"
                  />
                </a>
                <p className="">for support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
