import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShopLogin from "../components/Shop/ShopLogin";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller, seller } = useSelector((state) => state.seller);
  console.log(isSeller);
  console.log(seller);
  useEffect(() => {
    if (isSeller === true) {
      navigate(`/shop/${seller?._id}`);
    }
  }, []);
  return (
    <div>
      {/* shoplogin */}
      <ShopLogin />
    </div>
  );
};

export default ShopLoginPage;
