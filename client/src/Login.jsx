import { useState } from "react";

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  //   // Add your authentication logic here
  // };

  return (
    <div>
      Login
    </div>
    // <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    //   <div className="bg-white p-3 rounded w-25">
    //     <h2>Login</h2>
    //     <form onSubmit={handleLogin}>
    //       <div className="mb-3">
    //         <label htmlFor="email">
    //           <strong>Email</strong>
    //         </label>
    //         <input
    //           type="email"
    //           placeholder="Enter Email"
    //           autoComplete="off"
    //           name="email"
    //           className="form-control rounded-0"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="password">
    //           <strong>Password</strong>
    //         </label>
    //         <input
    //           type="password"
    //           placeholder="Enter Password"
    //           autoComplete="off"
    //           name="password"
    //           className="form-control rounded-0"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //       <button type="submit" className="btn btn-primary w-100 rounded-0">
    //         Login
    //       </button>
    //       <p>Don't have an Account?</p>
    //       <button className="btn btn-deafault border w-100 bg-light rounded-0 text-decoration-none">
    //         Register
    //       </button>
    //     </form>
    //   </div>
    //</div>
  );
}

export default Login