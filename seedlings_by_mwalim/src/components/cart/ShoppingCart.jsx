import { useDispatch } from "react-redux";
import { IoIosClose } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";

import {
  deleteCartItem,
  incrementQty,
  decrementQty,
} from "../../redux/seedlingSlice";

function ShoppingCart({ item }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-between w-full gap-x-[0.5rem] items-center sm:gap-x-[1rem]">
        <div
          onClick={() =>
            dispatch(deleteCartItem(item.id)) &
            toast.error(`${item.name} removed from cart`)
          }
          className="text-titleColor hover:text-textColor font-semiBolded cursor-pointer"
        >
          <IoIosClose />
        </div>
        <div className="w-[3.75rem]">
          <img src={item.image} className=" object-cover" alt={item.name} />
        </div>

        <p className="text-titleColor text-smallFontSize flex flex-wrap min-w-[80px] max-w-[80px]">
          {item.name}
        </p>
        <span className="text-smallFontSize text-textColor text-center">
          {item.newprice}
        </span>
        <div className="flex gap-x-[0.3rem] items-center lg:gap-x-[0.5rem]">
          <span
            onClick={() => dispatch(decrementQty(item.id))}
            className="bg-whiteColor text-textColor text-smallFontSize font-mediumWeight border-[0.8px] border-gray-200 px-[0.5rem] hover:bg-titleColor hover:text-whiteColor"
          >
            -
          </span>
          <span className="font-semiBolded text-smallFontSize text-titleColor">
            {item.quantity}
          </span>
          <span
            onClick={() => dispatch(incrementQty(item.id))}
            className="bg-whiteColor text-textColor text-smallFontSize font-mediumWeight border-[0.8px] border-gray-200 px-[0.45rem] hover:bg-titleColor hover:text-whiteColor"
          >
            +
          </span>
        </div>
        <span className="text-smallFontSize text-textColor font-mediumWeight underline underline-offset-2 text-center">
          {(item.quantity * item.newprice).toLocaleString("en-US")}
        </span>
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

export default ShoppingCart;
