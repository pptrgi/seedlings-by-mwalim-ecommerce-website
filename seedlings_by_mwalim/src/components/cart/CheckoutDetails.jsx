import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { resetCart } from "../../redux/seedlingSlice";
import mpesaLogo from "/images/logos/MpesaLogo.png";

function CheckoutDetails() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [payNow, setPayNow] = useState(false);
  const [errorPaying, setErrorPaying] = useState(false);
  const productData = useSelector((state) => state.seedling.productData);
  const loggedInUserInfo = useSelector((state) => state.seedling.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    let price = 0;

    productData.map((item) => {
      price += item.quantity * item.newprice;
      return price;
    });
    setTotalAmount(price);
  }, [productData]);

  const handleProceedToCheckout = (e) => {
    if (loggedInUserInfo) {
      setPayNow(true);
    } else {
      toast.error("Please login before you checkout");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  };

  const handleMpesaPay = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:2828/api/prompt-user", {
        phone: phoneNumber,
        amount: totalAmount,
      })
      .then((res) => {
        setPhoneNumber("");
        setTotalFigure(null);
        dispatch(resetCart());
      })
      .catch((err) => {
        console.log(err);
        setErrorPaying(true);
        setTimeout(() => setErrorPaying(false), 10000);
      });
  };

  return (
    <div className="flex justify-center items-center md:justify-start md:items-start">
      <div className="flex flex-col gap-2 justify-center items-center border-2 border-gray-200 bg-whiteColor px-2 py-4 rounded-[1rem] w-full max-w-[320px] md:max-w-none">
        <div className="py-[2rem]">
          <div className="flex justify-between items-center w-[250px] border-b-[1px] border-b-gray-200">
            <span className="text-textColor font-mediumWeight text-smallFontSize">
              Subtotal
            </span>
            <span className="text-titleColor font-mediumWeight text-smallFontSize">
              KES {totalAmount.toLocaleString("en-US")}
            </span>
          </div>
          <div className="flex justify-between items-center w-[250px] my-[2rem] border-b-[1px] border-b-gray-200">
            <span className="text-textColor font-mediumWeight text-smallFontSize">
              Shipping
            </span>
            <div className="flex flex-col space-y-1 items-end">
              <span className="text-smallerFontSize text-textColor">
                Free delivery around town
              </span>
              <span className="text-smallerFontSize text-textColor">
                Copia for shipping
              </span>
              <span className="text-smallerFontSize text-textColor">
                Pickup your package
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center w-[250px] mb-[3rem]">
            <span className="text-titleColor font-mediumWeight text-smallFontSize">
              Total
            </span>
            <span
              name="totalFigure"
              className="text-titleColor font-mediumWeight text-normalFontSize"
            >
              KES {totalAmount.toLocaleString("en-US")}
            </span>
          </div>

          <div
            onClick={handleProceedToCheckout}
            className={`text-whiteColor text-smallFontSize font-mediumWeight cursor-pointer text-center px-6 py-2 ${
              payNow
                ? "bg-titleColor/70 hover:bg-titleColor/90"
                : "bg-ctaColor hover:bg-titleColor"
            }`}
          >
            proceed to checkout
          </div>
        </div>
        {payNow && (
          <div className="flex justify-center items-center px-6 py-2">
            <div className="w-4/5 flex flex-col justify-center items-center gap-[1rem] px-4">
              <div className="w-20 overflow-hidden ">
                <img src={mpesaLogo} className="object-cover" alt="" />
              </div>
              <form onSubmit={handleMpesaPay}>
                <div className="flex flex-col space-y-[0.25rem] items-start">
                  <label
                    htmlFor="phoneNumber"
                    className="text-textColor text-smallFontSize font-mediumWeight"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="bg-whiteColor text-textColor text-smallFontSize px-[0.5rem] py-[0.5rem] border-[2px] border-gray-200 hover:border-ctaColor focus:border-ctaColor focus:outline-none rounded-lg w-full"
                    placeholder="e.g. 0700119134"
                    required
                    maxLength={10}
                    minLength={10}
                  />
                </div>
                <div className="mt-[1.5rem] flex justify-center items-center">
                  <button
                    type="submit"
                    className="bg-green-500 px-[1rem] py-[0.5rem] text-whiteColor text-smallFontSize rounded-full hover:bg-titleColor"
                  >
                    Pay{" "}
                    <span className="font-semiBolded">
                      {totalAmount.toLocaleString("en-US")}
                    </span>{" "}
                    Now
                  </button>
                </div>
                <div className="my-[1.5rem] flex space-x-2 items-center">
                  <span
                    className={`${
                      errorPaying ? "text-red-400" : "text-textColor"
                    } text-smallerFontSize`}
                  >
                    <IoMdInformationCircleOutline />
                  </span>
                  {errorPaying ? (
                    <p className="text-red-400 text-tinyFontSize max-w-sm">
                      Oops the server stumbled. We all have bad days... Try
                      again in a min
                    </p>
                  ) : (
                    <p className="text-textColor text-tinyFontSize max-w-sm">
                      Mpesa will prompt you to enter PIN on your phone to
                      complete this transaction
                    </p>
                  )}
                </div>
              </form>
            </div>
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

export default CheckoutDetails;
