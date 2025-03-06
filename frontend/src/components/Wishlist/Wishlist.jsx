import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
//import { IoBagHandleOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import styles from "../../styles/styles";
//import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/actions/wishlist";
import { backend_url } from "../../server";
//import { set } from "mongoose";
// import { toast } from "react-toastify";
import { addTocart } from "../../redux/actions/cart";

const Wishlist = ({ setOpenWishlist }) => {

  const { Wishlist } = useSelector((state) => state.Wishlist);
   const dispatch = useDispatch();

   const removeFromWishlistHandler = (data) => {
     dispatch(removeFromWishlist(data));
   };

  // const totalPrice = cart.reduce(
  //   (acc, item) => acc + item.qty * item.discountPrice,
  //   0
  // );

  const addTocartHandler= (data) => {
     const newData = {...data, qty:1};
     dispatch(addTocart(newData));
     setOpenWishlist(false);
   };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[30%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        {Wishlist && Wishlist.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            <h5>wishlist Items is empty!</h5>
          </div>
        ) : (
          <>
            <div>
              <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setOpenWishlist(false)}
                />
              </div>
              {/* Item length */}
              <div className={`${styles.noramlFlex} p-4`}>
                <AiOutlineHeart size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">
                  {Wishlist && Wishlist.length} items
                </h5>
              </div>

              {/* cart Single Items */}
              <br />
              <div className="w-full border-t">
                {Wishlist &&
                  Wishlist.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                     addTocartHandler={addTocartHandler}
                     removeFromWishlistHandler={removeFromWishlistHandler}
                    />
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// const CartSingle = ( quantityChangeHandler, removeFromCartHandler }) => {
const CartSingle = ({ data, removeFromWishlistHandler, addTocartHandler }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.discountPrice * value;

  //   const increment = (data) => {
  //     if (data.stock < value) {
  //       toast.error("Product stock limited!");
  //     } else {
  //       setValue(value + 1);
  //       const updateCartData = { ...data, qty: value + 1 };
  //       quantityChangeHandler(updateCartData);
  //     }
  //   };

  //   const decrement = (data) => {
  //     setValue(value === 1 ? 1 : value - 1);
  //     const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
  //     quantityChangeHandler(updateCartData);
  //   };

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer" />
        onclick={() => removeFromWishlistHandler(data)}
        <img
          src={`${backend_url}${data?.images[0]}`}
          alt=""
          className="w-[100px] h-min ml-2 mr-2 rounded-[5px]"
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>

          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            INR ₹{totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus
            size={20}
            className="cursor-pointer"
            title="Add to cart"
            onClick={() => addTocartHandler(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
