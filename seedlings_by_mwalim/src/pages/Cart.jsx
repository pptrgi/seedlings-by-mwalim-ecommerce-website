import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { resetCart } from "../redux/seedlingSlice";
import ShoppingCart from "../components/cart/ShoppingCart";
import CheckoutDetails from "../components/cart/CheckoutDetails";

function Cart() {
  const productItems = useSelector((state) => state.seedling.productData);
  const dispatch = useDispatch();
  return (
    <div className="pt-[6rem] pb-[4rem]">
      <div className="container">
        {productItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-[2.5rem] md:grid-cols-5 md:gap-[0.75rem] lg:gap-[3rem]">
              <div className="col-span-1 md:col-span-3">
                <h2 className="text-titleColor text-normalFontSize font-mediumWeight mb-[1rem]">
                  Shopping Cart
                </h2>
                <div className="flex flex-col space-y-4">
                  {productItems.map((item) => {
                    return <ShoppingCart key={item.id} item={item} />;
                  })}
                </div>
              </div>
              <div className="col-span-1 md:col-span-2">
                <h2 className="text-titleColor text-normalFontSize font-mediumWeight mb-[1rem]">
                  Checkout Totals
                </h2>
                <CheckoutDetails />
              </div>
            </div>
            <div className="flex flex-col space-y-[1rem] justify-center items-center md:space-y-0 md:space-x-[2rem] mt-[2rem] md:flex-row">
              <Link to="/">
                <div className="group flex space-x-[0.4rem] items-center px-[1rem] py-[0.5rem] rounded-lg">
                  <span className="text-textColor text-normalFontSize font-semiBolded group-hover:text-titleColor group-hover:-translate-x-1">
                    <IoMdArrowBack />
                  </span>
                  <span className="text-textColor text-smallFontSize font-semiBolded group-hover:text-titleColor">
                    Continue shopping
                  </span>
                </div>
              </Link>
              <div className="group">
                <div
                  onClick={() =>
                    dispatch(resetCart()) & toast.error("Your cart is emptied")
                  }
                  className="flex gap-x-[0.25rem] items-center text-whiteColor bg-red-500/80 px-[1rem] py-[0.5rem] rounded-lg cursor-pointer  group-hover:bg-red-500"
                >
                  <span className="text-smallFontSize font-semiBolded">
                    empty cart
                  </span>
                  <span className="text-smallFontSize font-semiBolded">
                    <MdRemoveShoppingCart />
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-[1.75rem]">
            <h2 className="text-textColor text-h3FontSize text-center pt-[4rem] mb-[1rem] leading-none">
              Your cart is empty. Time to go shopping.
            </h2>
            <Link to="/" className="flex justify-center items-center">
              <div className="group flex gap-x-[0.5rem] items-center text-ctaColor rounded-lg">
                <span className="text-normalFontSize group-hover:-translate-x-1 group-hover:text-titleColor">
                  <IoMdArrowBack />
                </span>
                <span className=" text-normalFontSize font-bold tracking-wide group-hover:text-titleColor">
                  Go shopping
                </span>
              </div>
            </Link>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={4000}
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

export default Cart;
