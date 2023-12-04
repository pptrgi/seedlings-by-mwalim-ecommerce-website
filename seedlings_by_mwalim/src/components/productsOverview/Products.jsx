import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { productsNav } from "../productsData/ProductsData";
import { useSelector, useDispatch } from "react-redux";
import { changeNavName } from "../../redux/seedlingSlice";

function Products({ products }) {
  const [groupProducts, setGroupProducts] = useState([]);
  const [active, setActive] = useState(0);

  const navName = useSelector((state) => state.seedling.navName.name);
  const dispatch = useDispatch();

  useEffect(() => {
    if (navName === "All") {
      setGroupProducts(products);
      setActive(0);
    } else {
      const otherProducts = products.filter(
        (product) => product.category === navName
      );
      setGroupProducts(otherProducts);
    }
  }, [navName, products]);

  useEffect(() => {
    setGroupProducts(products);
  }, [products]);

  const handleGroupClick = (e, index) => {
    dispatch(changeNavName(e.target.textContent));
    setActive(index);
  };

  return (
    <div className="pt-[6rem] pb-[2rem]" id="products">
      <h1 className="text-titleColor font-mediumWeight text-[2rem] text-center mb-[4rem] md:text-h1FontSize">
        Products in Stock
      </h1>
      <div className="mb-[1rem] flex justify-center items-center">
        {productsNav.map((navItem, index) => {
          return (
            <span
              key={index}
              onClick={(e) => handleGroupClick(e, index)}
              className={
                active == index
                  ? "flex ml-[1rem] text-normalFontSize text-titleColor font-mediumWeight cursor-pointer tracking-wide"
                  : "flex ml-[1rem] text-normalFontSize text-titleColor/40 font-mediumWeight cursor-pointer hover:underline underline-offset-2 tracking-wide"
              }
            >
              {navItem.name}
            </span>
          );
        })}
      </div>
      <div className="container grid grid-cols-2 gap-[0.5rem] items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {groupProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Products;
