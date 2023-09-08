import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import LandingPage from "../components/landingPage/LandingPage";
import ViewByCategory from "../components/ViewByCategory";
import Products from "../components/productsOverview/Products";
import SliderContents from "../components/sliderContents/SliderContents";

function Home() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data);
  }, [data]);
  return (
    <div>
      <LandingPage />
      <ViewByCategory seedlings={products} />
      <Products products={products} />
      <SliderContents />
    </div>
  );
}

export default Home;
