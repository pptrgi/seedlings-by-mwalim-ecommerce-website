import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addToCart } from "../../redux/seedlingSlice";

function ProductDetail() {
  const dispatch = useDispatch();

  const [baseQuantity, setBaseQuantity] = useState(1);
  const [details, setDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  return (
    <div className="pt-[6rem] pb-[4rem] ">
      <div className="container">
        <div className="grid grid-cols-1 gap-[1.5rem] items-center w-full md:grid-cols-2">
          <div className="p-[1.5rem]">
            <img
              src={details.image}
              className="w-full h-fit"
              alt={`${details.name}`}
            />
          </div>
          <div className="text-left px-4">
            <h2 className="text-titleColor text-h2FontSize font-mediumWeight mb-[0.75rem]">
              {details.name}
            </h2>
            <div>
              <span className="text-smallFontSize line-through text-textColor">
                KES {details.oldPrice}
              </span>
              <span className="text-normalFontSize text-textColor inline-block ml-[0.5rem]">
                KES {details.newprice}
              </span>
            </div>
            <div className="mt-[2rem]">
              <p className="text-textColor text-normalFontSize">
                {details.description}
              </p>
            </div>
            <div className="flex flex-col items-start space-y-[0.75rem] my-[4rem] sm:space-y-0 sm:flex-row sm:space-x-[1rem]">
              <div className="bg-bodyColor border-[1px] border-gray-200 flex items-center px-[0.75rem] py-[0.5rem] space-x-[1.5rem]">
                <span className="text-normalFontSize font-mediumWeight text-textColor">
                  Quantity
                </span>
                <div className="flex space-x-[0.65rem] items-center">
                  <span
                    onClick={(e) =>
                      setBaseQuantity(baseQuantity == 1 ? 1 : baseQuantity - 1)
                    }
                    className="bg-whiteColor text-textColor text-normalFontSize font-mediumWeight border-[1px] border-gray-200 px-[0.65rem] cursor-pointer hover:bg-titleColor hover:text-whiteColor"
                  >
                    -
                  </span>
                  <span className="font-semiBolded text-normalFontSize text-titleColor">
                    {baseQuantity}
                  </span>
                  <span
                    onClick={(e) => setBaseQuantity(baseQuantity + 1)}
                    className="bg-whiteColor text-textColor text-normalFontSize font-mediumWeight border-[1px] border-gray-200 px-[0.5rem] cursor-pointer hover:bg-titleColor hover:text-whiteColor"
                  >
                    +
                  </span>
                </div>
              </div>
              <span
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: details.id,
                      name: details.name,
                      category: details.category,
                      image: details.image,
                      newprice: details.newprice,
                      oldPrice: details.oldPrice,
                      quantity: baseQuantity,
                      description: details.description,
                    })
                  ) &
                  toast.success(
                    `${baseQuantity} ${details.name}s added successfully`
                  )
                }
                className="bg-ctaColor text-bodyColor text-normalFontSize px-[1rem] py-[0.5rem] cursor-pointer"
              >
                add to cart
              </span>
            </div>
            <div className="">
              <h3 className="font-mediumWeight text-normalFontSize text-textColor">
                Category - {details.category}
              </h3>
            </div>
          </div>
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

export default ProductDetail;
