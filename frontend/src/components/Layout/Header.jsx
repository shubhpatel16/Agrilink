import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import logo from "../../Assests/images/logo.png";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
// import Cart from "../cart/Cart";
// import Wishlist from "../Wishlist/Wishlist";
// import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  // const { isAuthenticated, user } = useSelector((state) => state.user);
  // const { isSeller } = useSelector((state) => state.seller);
  // const { wishlist } = useSelector((state) => state.wishlist);
  // const { cart } = useSelector((state) => state.cart);
  // const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  // const [openCart, setOpenCart] = useState(false);
  // const [openWishlist, setOpenWishlist] = useState(false);
  // const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="flex 800px:h-[500px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-[50px]" />
            </Link>
          </div>
          {/* search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#58942c] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-green-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;

                    const Product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${Product_name}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={i.image_Url[0]?.url}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          <div className={`bg-[#58942c] ${styles.button}`}>
            {/* <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}> */}
            <Link to="/seller">
              <h1 className="text-[#fff] flex items-center">
                {/* {isSeller ? "Go Dashboard" : "Become Seller"}{" "} */}
                Become a Seller
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition flex 800px:flex items-center justify-between w-full bg-[#58942c] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* Categories */}
          <div>
            <div
              className="relative h-[60px] mt-[10px] w-[270px] flex 1000px:block  "
              onClick={() => setDropDown(!dropDown)}
            >
              <BiMenuAltLeft
                size={30}
                color="#58942c"
                className="absolute top-3 left-2"
              />
              <button className="h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md">
                All Categories
              </button>
              <IoIosArrowDown
                size={30}
                color="#58942c"
                className="absolute right-10 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown && (
                <div className="absolute left-0 top-full w-full bg-white shadow-md z-50">
                  <DropDown
                    categoriesData={categoriesData}
                    setDropDown={setDropDown}
                  />
                </div>
              )}
            </div>
          </div>
          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {/* <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              > */}
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-red-500 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {/* {wishlist && wishlist.length} */}5
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {/* <div
              className="relative cursor-pointer mr-[15px]"
              onClick={() => setOpenCart(true)}
            > */}
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-red-500 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {/* {cart && cart.length} */}7
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <Link to="/login">
                  <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                </Link>

                {/* {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )} */}
              </div>
            </div>

            {/* cart popup */}
            {/* {openCart ? <Cart setOpenCart={setOpenCart} /> : null} */}

            {/* wishlist popup */}
            {/* {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
