import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SellerProtectedRoute = ({ isSeller, seller, children }) => {
  // const { loading, isAuthenticated } = useSelector((state) => state.user);
  // if (loading === false) {
  if (!isSeller) {
    return <Navigate to={`/`} replace />;
  }
  return children;
  // }
};

export default SellerProtectedRoute;
