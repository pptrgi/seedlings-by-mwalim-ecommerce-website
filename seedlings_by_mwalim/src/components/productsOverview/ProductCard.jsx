import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { MdAddShoppingCart } from "react-icons/md";

import { addToCart } from "../../redux/seedlingSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const id = product.name;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const productId = idString(id);

  const handleDetailPage = () => {
    navigate(`/product/${productId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="border-[1.8px] border-titleColor/10 bg-whiteColor w-full h-72 rounded-md max-w-[180px] md:h-[21rem] lg:h-[22rem] sm:max-w-none">
      <div
        onClick={handleDetailPage}
        className="relative group h-3/4 overflow-hidden bg-gray-200 rounded-t-md border-b-[1px] border-b-gray-100"
      >
        <img
          className="absolute top-0 object-cover group-hover:scale-110 group-hover:transition duration-500"
          src={product.image}
          alt={`${product.name}`}
        />
      </div>
      <div className="flex flex-col justify-between h-1/4 items-start px-[0.5rem] py-[0.5rem]">
        <div className="flex flex-row justify-between items-center w-full">
          <span className="text-titleColor text-smallFontSize font-mediumWeight tracking-wide">
            {product.name}
          </span>
          <span
            onClick={() =>
              dispatch(
                addToCart({
                  id: product.id,
                  name: product.name,
                  category: product.category,
                  image: product.image,
                  newprice: product.newprice,
                  oldPrice: product.oldPrice,
                  quantity: 1,
                  description: product.description,
                })
              ) & toast.success(`${product.name} added successfully`)
            }
            className="text-normalFontSize text-ctaColor font-mediumWeight cursor-pointer sm:text-[1.125rem] hover:text-titleColor"
          >
            <MdAddShoppingCart />
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <h3 className="text-textColor text-smallerFontSize font-semiBolded">
            KES {product.newprice}
          </h3>
          <h3 className="text-textColor/60 text-smallerFontSize line-through">
            KES {product.oldPrice}
          </h3>
        </div>
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

export default ProductCard;
