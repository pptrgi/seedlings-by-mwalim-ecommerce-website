import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosCart, IoMdMenu } from "react-icons/io";
import { BiX } from "react-icons/bi";
import { useSelector } from "react-redux";
import { BiUser, BiCategory } from "react-icons/bi";

import seedlingsLogo from "/images/logos/seedlingsLogo.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const productItems = useSelector((state) => state.seedling.productData);
  const userInfo = useSelector((state) => state.seedling.userInfo);

  return (
    <header className="fixed top-0 left-0 bg-bodyColor w-screen z-40 py-[0.75rem] sm:py-[1rem]">
      <nav>
        <div className="container flex justify-between items-center">
          <Link to="/" className=" w-[7rem] h-[1.75rem] sm:w-48 sm:h-8">
            <img
              src={seedlingsLogo}
              className="-mt-[0.25rem] sm:-mt-[0.85rem] object-cover"
              alt="Seedlings by Mwalim Logo"
              loading="eager"
            />
          </Link>
          <div className="hidden justify-center gap-[1.5rem] items-center text-normalFontSize md:flex">
            <Link
              to={"/"}
              className="text-titleColor/50 tracking-wide font-semiBolded hover:text-titleColor"
            >
              Home
            </Link>
            <Link
              to={"/#categories"}
              className="text-titleColor/50 tracking-wide font-semiBolded hover:text-titleColor"
            >
              Categories
            </Link>
            <Link
              to={"/#products"}
              className="text-titleColor/50 tracking-wide font-semiBolded hover:text-titleColor"
            >
              Products
            </Link>
            <Link to="/contacts">
              <span className="text-titleColor/50 tracking-wide font-semiBolded hover:text-titleColor">
                Contact
              </span>
            </Link>
            <Link to="/cart">
              <div className="relative group w-8">
                <span className="text-titleColor/70 text-[1.125rem] group-hover:text-ctaColor">
                  <IoIosCart />
                </span>
                <span className="absolute -top-2 right-0 bg-ctaColor w-4 h-4 rounded-full text-whiteColor text-center text-[10px]">
                  {productItems.length}
                </span>
              </div>
            </Link>

            <Link to="/login" className="flex gap-[0.75rem] items-center group">
              {userInfo ? (
                <img
                  src={userInfo.image}
                  alt={`${userInfo?.name.split(" ")[0]}'s profile`}
                  className="w-8 h-8 rounded-full bg-green-700/90"
                />
              ) : (
                <span className="px-[2rem] py-[0.75rem] bg-ctaColor text-normalFontSize text-bodyColor font-semiBolded rounded-full cursor-pointer hover:bg-titleColor">
                  Sign In
                </span>
              )}

              <div>
                {userInfo && (
                  <span className="text-textColor text-smallFontSize font-semiBolded group-hover:text-titleColor">{`Hi, ${
                    userInfo.name.split(" ")[0]
                  }`}</span>
                )}
              </div>
            </Link>
          </div>
          {showMenu && (
            <div className="z-50 md:hidden">
              <div className="absolute top-0 left-0 w-3/4 min-h-screen bg-bodyColor border-r-[1px] border-r-gray-200">
                <div className="pt-[3rem]">
                  <span
                    onClick={(e) => setShowMenu(false)}
                    className="flex justify-end items-center px-6 text-textColor hover:text-titleColor"
                  >
                    <BiX className="text-[1.5rem]" />
                  </span>
                </div>
                <div
                  onClick={(e) => setShowMenu(false)}
                  className="pt-[2rem] pb-[1rem] px-12 flex justify-end items-center"
                >
                  <div className="flex gap-3 items-center">
                    <div>
                      {userInfo && (
                        <span className="text-textColor text-smallFontSize">{`Hi, ${
                          userInfo.name.split(" ")[0]
                        }`}</span>
                      )}
                    </div>
                    <Link to="/cart">
                      <div className="relative group w-8">
                        <span
                          href=""
                          className="text-titleColor/80 font-mediumWeight text-[1.125rem] group-hover:text-ctaColor"
                        >
                          <IoIosCart />
                        </span>
                        <span className="absolute -top-3 right-1 bg-ctaColor w-4 h-4 rounded-full text-whiteColor text-center text-[10px]">
                          {productItems.length}
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
                <Link
                  to="/"
                  onClick={(e) => setShowMenu(false)}
                  className="pb-[1rem] px-4 flex justify-start items-center"
                >
                  <img
                    src={seedlingsLogo}
                    className="w-36 h-[3.5rem] cursor-pointer"
                    alt="Seedlings by Mwalim Logo"
                  />
                </Link>
                <div className="flex flex-col gap-3 flex-items px-6 text-normalFontSize">
                  <Link
                    to={"/"}
                    onClick={(e) => setShowMenu(false)}
                    className="text-textColor font-normalWeight hover:text-titleColor"
                  >
                    Home
                  </Link>
                  <Link
                    to={"/#categories"}
                    onClick={(e) => setShowMenu(false)}
                    className="text-textColor font-normalWeight hover:text-titleColor"
                  >
                    Categories
                  </Link>
                  <Link
                    to={"/#products"}
                    onClick={(e) => setShowMenu(false)}
                    className="text-textColor font-normalWeight hover:text-titleColor"
                  >
                    Products
                  </Link>
                  <Link
                    to={"/cart"}
                    onClick={(e) => setShowMenu(false)}
                    className="text-textColor font-normalWeight hover:text-titleColor"
                  >
                    Cart
                  </Link>
                  <Link
                    to={"/contacts"}
                    onClick={(e) => setShowMenu(false)}
                    className="text-textColor font-normalWeight hover:text-titleColor"
                  >
                    Contact
                  </Link>
                  <Link
                    to={"/login"}
                    onClick={(e) => setShowMenu(false)}
                    className="text-textColor font-normalWeight hover:text-titleColor"
                  >
                    Signin
                  </Link>
                </div>
                <div
                  onClick={(e) => setShowMenu(false)}
                  className="flex justify-start items-center gap-4 px-4 pt-[3rem]"
                >
                  {userInfo ? (
                    <Link to="/login">
                      <span className="px-[2rem] py-[0.75rem] bg-ctaColor text-normalFontSize text-bodyColor rounded-full cursor-pointer hover:bg-titleColor">
                        Sign Out
                      </span>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <span className="px-[2rem] py-[0.75rem] bg-ctaColor text-normalFontSize text-bodyColor rounded-full cursor-pointer hover:bg-titleColor">
                        Sign In
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="md:hidden">
            <div className="flex justify-center items-center gap-[1.125rem] sm:gap-[1.75rem]">
              <a
                href="#categories"
                className="group flex flex-col gap-[1px] items-center"
              >
                <span className="text-titleColor text-normalFontSize group-hover:text-ctaColor">
                  <BiCategory />
                </span>
                <span className="text-textColor text-tinyFontSize tracking-wide group-hover:text-ctaColor">
                  Category
                </span>
              </a>
              <Link
                to="/cart"
                className="relative group flex flex-col gap-[1px] items-center"
              >
                <span className="text-titleColor text-normalFontSize group-hover:text-ctaColor">
                  <IoIosCart />
                </span>
                <span className="absolute -top-3 right-2 bg-ctaColor w-4 h-4 rounded-full text-whiteColor text-center text-[10px]">
                  {productItems.length}
                </span>
                <span className="text-textColor text-tinyFontSize tracking-wide group-hover:text-ctaColor">
                  Cart
                </span>
              </Link>
              <Link
                to="/login"
                className="group flex flex-col gap-[1px] items-center"
              >
                {userInfo ? (
                  <img
                    src={userInfo.image}
                    className="w-[1.25rem] h-[1.25rem] rounded-full bg-green-700/90 text-smallFontSize text-whiteColor/80 uppercase sm:text-normalFontSize"
                    alt="user"
                  />
                ) : (
                  <span className="text-titleColor text-normalFontSize group-hover:text-ctaColor">
                    <BiUser />
                  </span>
                )}
                {userInfo ? (
                  <span className="text-textColor text-tinyFontSize tracking-wide">{`Hi, ${
                    userInfo.name.split(" ")[0]
                  }`}</span>
                ) : (
                  <span className="text-textColor text-tinyFontSize tracking-wide group-hover:text-ctaColor">
                    Account
                  </span>
                )}
              </Link>
              <div
                onClick={(e) => setShowMenu(true)}
                className="group flex flex-col gap-[1px] items-center"
              >
                <span className="text-titleColor text-normalFontSize group-hover:text-ctaColor">
                  <IoMdMenu />
                </span>
                <span className="text-textColor text-tinyFontSize tracking-wide group-hover:text-ctaColor">
                  Menu
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
