import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/product";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.products);
  const [data, setData] = useState(null);
  // const { allProducts } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);
  // const { id } = useParams();
  // const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  // useEffect(() => {
  //   dispatch(getAllProducts());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (allProducts && allProducts.length > 0) {
  //     const productData = allProducts.find((i) => i._id === id);
  //     setData(productData);
  //   }
  // }, [allProducts, id]);

  useEffect(() => {
    if (eventData !== null) {
      const data = allEvents && allEvents.find((i) => i._id === id);
      setData(data);
    } else {
      const data = allProducts && allProducts.find((i) => i._id === id);
      setData(data);
      // }, [allProducts]);
    }
  }, [allProducts, allEvents]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {!eventData && <>{data && <SuggestedProduct data={data} />}</>}
      {/* {data && <SuggestedProduct data={data} />} */}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;

// import React, { useEffect, useState } from "react";
// import { useParams, useSearchParams } from "react-router-dom";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
// import ProductDetails from "../components/Products/ProductDetails";
// // import SuggestedProduct from "../components/Products/SuggestedProduct";
// import { useSelector } from "react-redux";

// const ProductDetailsPage = () => {
//   const { allProducts } = useSelector((state) => state.products);
//   // const { allEvents } = useSelector((state) => state.events);
//   const { id } = useParams();
//   const [data, setData] = useState(null);
//   // const [searchParams] = useSearchParams();
//   // const eventData = searchParams.get("isEvent");

//   useEffect(() => {
//     if (allProducts?.length > 0) {
//       const foundProduct = allProducts.find((i) => i._id === id);
//       setData(foundProduct || null);
//     }
//   }, [allProducts, id]);

//   console.log("All Products:", allProducts);
//   console.log("Product ID:", id);
//   console.log("Found Product:", data);

//   return (
//     <div>
//       <Header />
//       {data ? (
//         <ProductDetails data={data} />
//       ) : (
//         <p>Loading product details...</p>
//       )}
//       {/* {!eventData && <>{data && <SuggestedProduct data={data} />}</>} */}
//       {/* {data && <SuggestedProduct data={data} />} */}
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetailsPage;

// import React, { useEffect, useState } from "react";
// import { useParams, useSearchParams } from "react-router-dom";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
// import ProductDetails from "../components/Products/ProductDetails";
// import { productData } from "../static/data";
// import SuggestedProduct from "../components/Products/SuggestedProduct";

// const ProductDetailsPage = () => {
//   const { name } = useParams();
//   const [data, setData] = useState(null);
//   const productName = name.replace(/-/g, " ");
//   console.log(data);

//   useEffect(() => {
//     const data = productData.find((i) => i.name === productName);
//     setData(data);
//   }, []);

//   return (
//     <div>
//       <Header />
//       <ProductDetails data={data} />
//       {!data && <>{data && <SuggestedProduct data={data} />}</>}
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetailsPage;
