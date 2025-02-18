import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { backend_url } from "../../server";
import styles from "../../styles/styles";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdTrackChanges } from "react-icons/md";
// import { RxCross1 } from "react-icons/rx";
// import {
//   deleteUserAddress,
//   loadUser,
//   updatUserAddress,
//   updateUserInformation,
// } from "../../redux/actions/user";
// import { Country, State } from "country-state-city";
// import { useEffect } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { getAllOrdersOfUser } from "../../redux/actions/order";

const ProfileContent = ({ active }) => {
  const { user, error, successMessage } = useSelector((state) => state.user);
  // console.log(`${backend_url}${user.avatar.url}`);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  // const [avatar, setAvatar] = useState(null);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     dispatch({ type: "clearErrors" });
  //   }
  //   if (successMessage) {
  //     toast.success(successMessage);
  //     dispatch({ type: "clearMessages" });
  //   }
  // }, [error, successMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(updateUserInformation(name, email, phoneNumber, password));
  };

  // const handleImage = async (e) => {
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setAvatar(reader.result);
  //       axios
  //         .put(
  //           `${server}/user/update-avatar`,
  //           { avatar: reader.result },
  //           {
  //             withCredentials: true,
  //           }
  //         )
  //         .then((response) => {
  //           dispatch(loadUser());
  //           toast.success("avatar updated successfully!");
  //         })
  //         .catch((error) => {
  //           toast.error(error);
  //         });
  //     }
  //   };

  //   reader.readAsDataURL(e.target.files[0]);
  // };

  return (
    <div className="w-full">
      {/* profile */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backend_url}${user.avatar.url}`}
                // src={`${user?.avatar?.url}`}
                className="w-[150px] h-[150px] rounded-full object-cover
              border-[3px] border-[#58942c]"
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                {/* <input
                  type="file"
                  id="image"
                  className="hidden"
                  // onChange={handleImage}
                /> */}
                {/* <label htmlFor="image"> */}
                <AiOutlineCamera />
                {/* </label> */}
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full flex  pb-3">
                {/* <div className="w-full 800px:flex block pb-3"> */}
                <div className=" w-[50%]">
                  {/* <div className=" w-[100%] 800px:w-[50%]"> */}
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    // className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    className={`${styles.input} !w-[95%] `}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* <div className=" w-[100%] 800px:w-[50%]"> */}
                <div className=" w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] `}
                    // className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full flex  pb-3">
                {/* <div className="w-full 800px:flex block pb-3"> */}
                <div className=" w-[50%]">
                  {/* <div className=" w-[100%] 800px:w-[50%]"> */}
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    // className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    className={`${styles.input} !w-[95%] `}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                {/* <div className=" w-[100%] 800px:w-[50%]"> */}
                <div className=" w-[50%]">
                  <label className="block pb-2">Zip Code</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] `}
                    // className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full flex  pb-3">
                {/* <div className="w-full 800px:flex block pb-3"> */}
                <div className=" w-[50%]">
                  {/* <div className=" w-[100%] 800px:w-[50%]"> */}
                  <label className="block pb-2">Address 1</label>
                  <input
                    type="address"
                    // className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    className={`${styles.input} !w-[95%] `}
                    required
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
                {/* <div className=" w-[100%] 800px:w-[50%]"> */}
                <div className=" w-[50%]">
                  {/* <div className=" w-[100%] 800px:w-[50%]"> */}
                  <label className="block pb-2">Address 2</label>
                  <input
                    type="address"
                    // className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    className={`${styles.input} !w-[95%] `}
                    required
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
              </div>

              {/* <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Enter your password</label>
                  <input
                    type="password"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div> */}
              <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      )}

      {/* order */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}

      {/* Refund */}
      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}

      {/* Track order */}
      {active === 5 && (
        <div>
          <TrackOrder />
        </div>
      )}

      {/* Payment Method */}
      {active === 6 && (
        <div>
          <PaymentMethod />
        </div>
      )}

      {/* Change Password */}
      {/* {active === 7 && (
        <div>
          <ChangePassword />
        </div>
      )} */}

      {/*  user Address */}
      {active === 8 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};

const AllOrders = () => {
  //   const { user } = useSelector((state) => state.user);
  //   const { orders } = useSelector((state) => state.order);
  //   const dispatch = useDispatch();

  const orders = [
    {
      _id: "bzcckzdjkzbdjajhddcknjkch",
      orderItems: [
        {
          name: "Nike Air Max 270",
        },
      ],
      totalPrice: 100,
      orderStatus: "Processing",
    },
  ];

  //   useEffect(() => {
  //     dispatch(getAllOrdersOfUser(user._id));
  //   }, []);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "INR ₹ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const AllRefundOrders = () => {
  //   const { user } = useSelector((state) => state.user);
  //   const { orders } = useSelector((state) => state.order);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getAllOrdersOfUser(user._id));
  //   }, []);

  const orders = [
    {
      _id: "bzcckzdjkzbdjajhddcknjkch",
      orderItems: [
        {
          name: "Nike Air Max 270",
        },
      ],
      totalPrice: 100,
      orderStatus: "Processing",
    },
  ];

  const eligibleOrders =
    orders && orders.filter((item) => item.status === "Processing refund");

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];
  orders &&
    orders.forEach((item) => {
      // eligibleOrders &&
      //   eligibleOrders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "INR ₹ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};

const TrackOrder = () => {
  //   const { user } = useSelector((state) => state.user);
  //   const { orders } = useSelector((state) => state.order);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getAllOrdersOfUser(user._id));
  //   }, []);

  const orders = [
    {
      _id: "bzcckzdjkzbdjajhddcknjkch",
      orderItems: [
        {
          name: "Nike Air Max 270",
        },
      ],
      totalPrice: 100,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/track/order/${params.id}`}>
              <Button>
                <MdTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      // eligibleOrders &&
      //   eligibleOrders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "INR ₹ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const PaymentMethod = () => {
  return (
    <div className="w-full px-5 ">
      <div className="flex w-full items-center justify-between ">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2 ">
          Payment Methods
        </h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-[#fff]">Add New</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <img
            src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
            alt=""
          />
          <h5 className="pl-5 font-[600]">Patel Vaibhav</h5>
        </div>
        <div className="pl-8 flex items-center">
          <h6>1234 **** ****</h6>
          <div className="pl-6">06/2030</div>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

// const ChangePassword = () => {
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const passwordChangeHandler = async (e) => {
//     e.preventDefault();

//     await axios
//       .put(
//         `${server}/user/update-user-password`,
//         { oldPassword, newPassword, confirmPassword },
//         { withCredentials: true }
//       )
//       .then((res) => {
//         toast.success(res.data.success);
//         setOldPassword("");
//         setNewPassword("");
//         setConfirmPassword("");
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };
//   return (
//     <div className="w-full px-5">
//       <h1 className="block text-[25px] text-center font-[600] text-[#000000ba] pb-2">
//         Change Password
//       </h1>
//       <div className="w-full">
//         <form
//           aria-required
//           onSubmit={passwordChangeHandler}
//           className="flex flex-col items-center"
//         >
//           <div className=" w-[100%] 800px:w-[50%] mt-5">
//             <label className="block pb-2">Enter your old password</label>
//             <input
//               type="password"
//               className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//               required
//               value={oldPassword}
//               onChange={(e) => setOldPassword(e.target.value)}
//             />
//           </div>
//           <div className=" w-[100%] 800px:w-[50%] mt-2">
//             <label className="block pb-2">Enter your new password</label>
//             <input
//               type="password"
//               className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//               required
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />
//           </div>
//           <div className=" w-[100%] 800px:w-[50%] mt-2">
//             <label className="block pb-2">Enter your confirm password</label>
//             <input
//               type="password"
//               className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//               required
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <input
//               className={`w-[95%] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
//               required
//               value="Update"
//               type="submit"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

const Address = () => {
  return (
    <div className="w-full px-5 ">
      <div className="flex w-full items-center justify-between ">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2 ">
          My Addresses
        </h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-[#fff]">Add New</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <h5 className="pl-5 font-[600]">Default</h5>
        </div>
        <div className="pl-8 flex items-center">
          <h6>
            505 Jashoda Apartment, Akshar Township Vanivad circle, College road,
            Nadiad
          </h6>
        </div>
        <div className="pl-8 flex items-center">
          <h6>(+91) 9898x 2143x</h6>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default ProfileContent;
