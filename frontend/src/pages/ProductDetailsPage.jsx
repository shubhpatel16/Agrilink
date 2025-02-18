import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import { productData } from "../static/data";
import SuggestedProduct from "../components/Products/SuggestedProduct";
// import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  // const { allProducts } = useSelector((state) => state.products);
  // const { allEvents } = useSelector((state) => state.events);
  const { name } = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " ");
  // const [searchParams] = useSearchParams();
  // const eventData = searchParams.get("isEvent");
  console.log(name);

  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setData(data);
    // if (eventData !== null) {
    //   const data = allEvents && allEvents.find((i) => i._id === id);
    //   setData(data);
    // } else {
    //   const data = allProducts && allProducts.find((i) => i._id === id);
    //   setData(data);
    // }
  }, []);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {
        // !data && (
        //   <>
        // {
        data && <SuggestedProduct data={data} />
        // }
        // </>
        // )
      }
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
