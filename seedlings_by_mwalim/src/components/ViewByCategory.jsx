import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { changeNavName } from "../redux/seedlingSlice";
import orangeFruit from "/images/orangeFruit.png";
import trees from "/images/trees.png";
import flower2 from "/images/flower2.png";

function ShopByCategory({ seedlings }) {
  const dispatch = useDispatch();

  const categories = {
    Fruit: {
      name: "Fruits",
      image: orangeFruit,
      categorySeedlings: [],
    },
    Tree: {
      name: "Trees",
      image: trees,
      categorySeedlings: [],
    },
    Flower: {
      name: "Flowers",
      image: flower2,
      categorySeedlings: [],
    },
  };

  seedlings.forEach((seedling) => {
    const category = categories[seedling.category];
    category.categorySeedlings.push(seedling);
  });

  let categoryKeys = Object.keys(categories);

  return (
    <div className="pt-[6rem] pb-[2rem]" id="categories">
      <h1 className="text-[2rem] text-titleColor font-mediumWeight text-center mb-[4rem] md:text-h1FontSize">
        View by Category
      </h1>
      <div className="container grid grid-cols-1 gap-3 px-[3rem] sm:px-[2rem] lg:px-[3rem] sm:grid-cols-2 md:grid-cols-3">
        {categoryKeys.map((categoryKey, index) => {
          return (
            <div
              key={index}
              className="relative group bg-whiteColor shadow-md h-[300px] overflow-hidden lg:h-[320px] max-w-[250px] sm:max-w-none"
            >
              <img
                className="absolute bottom-[0.5rem] left-[3rem]"
                src={categories[categoryKey].image}
                alt={`${categories[categoryKey].name}`}
              />
              <div className="absolute top-0 left-0 p-6 group-hover:opacity-0">
                <h3 className="text-textColor text-h2FontSize font-mediumWeight mb-[0.5rem]">
                  {categories[categoryKey].name}
                </h3>
                <p className="text-textColor text-smallerFontSize">
                  {categories[categoryKey].categorySeedlings.length} items
                </p>
              </div>
              <div className="absolute h-full w-full bg-ctaColor/80 -bottom-10 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute top-0 left-0 p-6 ">
                  <h3 className="text-whiteColor text-h2FontSize font-mediumWeight mb-[0.5rem]">
                    {categories[categoryKey].name}
                  </h3>
                  <p className="text-whiteColor text-smallerFontSize">
                    {categories[categoryKey].categorySeedlings.length} items
                  </p>
                </div>
                <div className="absolute bottom-[1rem] left-0 p-6">
                  <span
                    onClick={(e) =>
                      dispatch(changeNavName(categoryKey)) &&
                      toast.info(
                        `See the ${categories[categoryKey].name} products on the Products-in-Stock section`
                      )
                    }
                    className="text-ctaColor uppercase bg-whiteColor px-[2rem] py-[0.75rem] rounded-full text-normalFontSize cursor-pointer font-mediumWeight  hover:text-titleColor"
                  >
                    {`view ${categories[categoryKey].name}`}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopByCategory;
