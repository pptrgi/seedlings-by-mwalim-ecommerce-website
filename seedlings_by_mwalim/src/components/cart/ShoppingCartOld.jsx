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
      <div className="flex space-x-4 items-center">
        <div className="flex space-x-2 items-center">
          <div
            onClick={() =>
              dispatch(deleteCartItem(item.id)) &
              toast.error(`${item.name} removed from cart`)
            }
            className="text-titleColor hover:text-textColor font-semiBolded cursor-pointer"
          >
            <IoIosClose />
          </div>
          <div className="w-14 overflow-hidden">
            <img src={item.image} className="object-cover" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 items-center sm:grid-cols-4 sm:gap-2">
          <p className="text-titleColor text-smallFontSize flex flex-wrap min-w-[80px] max-w-[80px]">
            {item.name}
          </p>
          <span className="text-smallFontSize text-textColor text-center">
            {item.newprice}
          </span>
          <div className="flex space-x-[0.5rem] items-center">
            <span
              onClick={() => dispatch(decrementQty(item.id))}
              className="bg-whiteColor text-textColor text-smallFontSize font-mediumWeight border-[1px] border-gray-200 px-[0.65rem] hover:bg-titleColor hover:text-whiteColor"
            >
              -
            </span>
            <span className="font-semiBolded text-smallFontSize text-titleColor">
              {item.quantity}
            </span>
            <span
              onClick={() => dispatch(incrementQty(item.id))}
              className="bg-whiteColor text-textColor text-smallFontSize font-mediumWeight border-[1px] border-gray-200 px-[0.5rem] hover:bg-titleColor hover:text-whiteColor"
            >
              +
            </span>
          </div>
          <span className="text-smallFontSize text-textColor font-mediumWeight underline underline-offset-2 text-center">
            {item.quantity * item.newprice}
          </span>
        </div>
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

export default ShoppingCart;
