import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { getAllProducts } from "../../../redux/actions/product";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.products);

  // console.log(allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      const sortedData = [...allProducts].sort(
        (a, b) => b.sold_out - a.sold_out
      );
      setData(sortedData.slice(0, 5));
    }
  }, [allProducts]);

  // useEffect(() => {
  //   const allProductsData = allProducts ? [...allProducts] : [];
  //   const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
  //   const firstFive = sortedData && sortedData.slice(0, 5);
  //   setData(firstFive);
  // }, [allProducts]);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data.length !== 0 && (
            <>
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;

// useEffect(() => {
//   if (allProducts && Array.isArray(allProducts)) {
//     const sortedData = [...allProducts]
//       .filter((product) => typeof product.sold_out === "number")
//       .sort((a, b) => b.sold_out - a.sold_out)
//       .slice(0, 5);

//     setData(sortedData);
//   }
// }, [allProducts]);

// return (
//     <div>
//       <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1>Best Deals</h1>
//         </div>

//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : bestDeals.length === 0 ? (
//           <p className="text-center">No Best Deals Available</p>
//         ) : (
//           <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//             {bestDeals.map((product, index) => (
//               <ProductCard data={product} key={product.id || index} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import styles from "../../../styles/styles";
// import ProductCard from "../ProductCard/ProductCard.jsx";
// import { productData } from "../../../static/data.js";

// const BestDeals = () => {
//   const [data, setData] = useState([]);
//   // const { allProducts } = useSelector((state) => state.products);
//   useEffect(() => {
//     const d =
//       productData && productData.sort((a, b) => b.total_sell - a.total_sell);
//     const firstFive = d.slice(0, 5);
//     setData(firstFive);

//     // const allProductsData = allProducts ? [...allProducts] : [];
//     // const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
//     // const firstFive = sortedData && sortedData.slice(0, 5);
//     // setData(firstFive);
//   }, []);

//   return (
//     <div>
//       <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1>Best Deals</h1>
//         </div>
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//           {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
//           {/* {data && data.length !== 0 && (
//             <>
//               {data &&
//                 data.map((i, index) => <ProductCard data={i} key={index} />)}
//             </>
//           )} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestDeals;
