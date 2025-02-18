import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
// import PoductDetailsInfo from "";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleMessageSubmit = () => {
    navigate("/inbox?conversation=50cbkhzbhdbadb");
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="flex w-full 800px:flex">
              {/* <div className="block w-full 800px:flex"> */}
              <div className="w-full 800px:w-[50%]">
                <img
                  src={data.image_Url[select].url}
                  alt=""
                  className="w-[80%]"
                />
                <div className="w-full flex">
                  {/* {data &&
                    data.images.map((i, index) => ( */}
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={`${data?.image_Url[0].url}`}
                      alt=""
                      className="h-[200px] overflow-hidden mr-3 mt-3"
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={`${data?.image_Url[1].url}`}
                      alt=""
                      className="h-[200px] overflow-hidden mr-3 mt-3"
                      onClick={() => setSelect(1)}
                    />
                  </div>
                  {/* ))} */}
                  {/* <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  ></div> */}
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}₹
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? data.price + "₹" : null}
                  </h3>
                </div>

                <div className="flex items-center mt-12 justify-between pr-3">
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden shadow-lg">
                    {/* Decrement Button */}
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold px-4 py-2 hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>

                    {/* Count Display */}
                    <span className="bg-gray-200 text-gray-800 font-medium px-6 py-2 text-center min-w-[50px]">
                      {count}
                    </span>

                    {/* Increment Button */}
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold px-4 py-2 hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        // onClick={() => removeFromWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        //onClick={() => addToWishlistHandler(data)}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
                  // onClick={() => addToCartHandler(data._id)}
                >
                  <span className="text-white flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
                <div className="flex items-center pt-8">
                  {/* <Link to={`/shop/preview/${data?.shop._id}`}> */}
                  <img
                    src={data.shop.shop_avatar.url}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                  {/* </Link> */}
                  <div className="pr-8">
                    {/* <Link to={`/shop/preview/${data?.shop._id}`}> */}
                    <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                      {data.shop.name}
                    </h3>
                    {/* </Link> */}
                    <h5 className="pb-3 text-[15px]">
                      {/* ({averageRating}/5) Ratings */}({data.shop.ratings})
                      Ratings
                    </h5>
                  </div>
                  <div
                    className={`${styles.button} bg-gradient-to-r from-slate-600 to-slate-500 mt-4 !rounded !h-11 flex items-center justify-center cursor-pointer`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PoductDetailsInfo data={data} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const PoductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded ">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            {/* {data.description} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ab
            dolor vero dicta voluptatibus dolorum! Eius aut ea harum eos
            nesciunt vero sit unde, adipisci facilis autem, cumque aperiam
            beatae voluptatem repellat! Facilis illum sunt rem tempora vero,
            culpa modi totam commodi fugit neque velit. Doloribus iusto impedit,
            voluptates aliquid expedita nemo assumenda ullam asperiores deleniti
            architecto nesciunt maiores. Nisi debitis, cum minima exercitationem
            sequi error quas provident? Distinctio, facilis. Vitae ipsa ad illo
            natus. Sequi doloribus officiis fuga dolorem porro corrupti ex optio
            consequatur suscipit neque et voluptates recusandae necessitatibus
            debitis, nostrum, est quisquam animi iure non. Hic at facilis
            aliquid nihil dolorem, impedit saepe laborum aliquam quibusdam!
            Amet, laudantium minima nihil facere itaque rem, magni omnis ea
            quaerat quae quasi! Doloremque veritatis esse perspiciatis veniam,
            minus culpa inventore deserunt rerum odit adipisci nisi facere odio!
            Quisquam ab amet, nesciunt consectetur quia inventore fugit
            reprehenderit corporis quaerat, assumenda quis iure et. Ea fugiat
            quam natus possimus iure a at quisquam quia fuga eaque optio eius
            sint dicta reprehenderit voluptates eos beatae, nihil et tempora
            numquam expedita nulla itaque hic odio. Vitae omnis enim dolorum
            totam cumque molestias quis atque quas provident? Praesentium
            reprehenderit eligendi excepturi vero numquam rem nam, consequatur
            aperiam distinctio ab quia beatae cumque eum pariatur similique
            repellendus. Dolores ratione dolorem rem quis vero blanditiis
            suscipit temporibus voluptatibus voluptas recusandae dolorum iste
            earum hic aspernatur, animi beatae eos obcaecati neque, architecto
            facilis aut sunt omnis expedita enim? Excepturi dolorum, tempore
            nisi illo quaerat sint laudantium assumenda! Ex veritatis quod,
            cupiditate, explicabo earum magnam beatae laborum praesentium
            facilis quaerat itaque. Impedit mollitia, facere enim, iure
            voluptatum unde esse harum dolores maiores illum, assumenda
            laudantium ipsam dolorum eaque aliquam aut sequi minima nam nisi.
            Dolor, sequi accusantium. Nam voluptates inventore saepe odit harum
            omnis minima ab in porro sequi.
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
          {/* {data &&
            data.reviews.map((item, index) => (
              <div className="w-full flex my-2">
                <img
                  src={`${item.user.avatar?.url}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="pl-2 ">
                  <div className="w-full flex items-center">
                    <h1 className="font-[500] mr-3">{item.user.name}</h1>
                    <Ratings rating={data?.ratings} />
                  </div>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))} */}

          <p>No Reviews Yet!!</p>

          {/* <div className="w-full flex justify-center">
            {data && data.reviews.length === 0 && (
              <h5>No Reviews have for this product!</h5>
            )}
          </div> */}
        </div>
      ) : null}

      {active === 3 && (
        <div className="w-full flex 800px:flex p-5">
          {/* <div className="w-full block 800px:flex p-5"> */}
          <div className="w-full 800px:w-[50%]">
            {/* <Link to={`/shop/preview/${data.shop._id}`}> */}
            <div className="flex items-center">
              <img
                src={data.shop.shop_avatar.url}
                className="w-[50px] h-[50px] rounded-full"
                alt=""
              />
              <div className="pl-3">
                <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                <h5 className="pb-2 text-[15px]">
                  {/* ({averageRating}/5)  */}({data.shop.ratings})Ratings
                </h5>
              </div>
            </div>
            {/* </Link> */}
            <p className="pt-2">
              {/* {data.shop.description} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              amet. Dolorem repellendus ab, doloribus unde dolores explicabo,
              provident accusantium ipsum cum commodi reprehenderit maiores nam
              iure blanditiis exercitationem pariatur deleniti.
            </p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-right">
              <h5 className="font-[600]">
                Joined on:{" "}
                <span className="font-[500]">
                  {/* {data.shop?.createdAt?.slice(0, 10)} */}
                  01 Jan,2025
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products:{" "}
                <span className="font-[500]">
                  {/* {products && products.length} */}
                  50
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews:{" "}
                <span className="font-[500]">
                  {/* {totalReviewsLength} */}0
                </span>
              </h5>
              <Link to="/">
                <div
                  className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3 ml-auto `}
                >
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
