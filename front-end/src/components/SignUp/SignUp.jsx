import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import {
  signUpStart,
  signUpFailure,
  signUpSuccess,
} from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signUpStart());
      const res = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signUpFailure(data));
        return;
      }
      toast.success("Account created successfully!");
      dispatch(signUpSuccess(data));
      // Delay navigation to the login page
      setTimeout(() => {
        navigate("/login");
      }, 3000); // 3 seconds delay
    } catch (error) {
      toast.error("Account creation failed!");
      dispatch(signUpFailure(error));
    }
  };

  return (
    <div className="body">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Register Account</h1>
          <div className="input-box">
            <input
              className="ps-4 border rounded-5 border-opacity-25"
              id="username"
              type="text"
              placeholder="Username"
              onChange={handleChange}
            />
            <i class="bi bi-person-fill"></i>
          </div>
          <div className="input-box">
            <input
              className="ps-4 border rounded-5 border-opacity-25"
              id="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <i class="bi bi-envelope-fill"></i>
          </div>
          <div className="input-box">
            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <i class="bi bi-lock-fill"></i>
          </div>
          <div className="input-box">
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            <i class="bi bi-lock-fill"></i>
          </div>
          {/* <div className='remember-forgot'>
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="">Forgot password?</a>
                </div> */}
          <div className="form-floating mb-5">
            <select
              id="userType"
              className="form-select pt-3 ps-4 bg-transparent border rounded-5 border-opacity-25 text-white fw-semibold"
              aria-label="Floating label select example"
              onChange={handleChange}
            >
              <option className="text-dark" value="" selected>
                Select your account access
              </option>
              <option className="text-dark" value="Admin">
                Admin
              </option>
              <option className="text-dark" value="Buyer">
                Buyer
              </option>
            </select>
          </div>

          <button disabled={loading} id="wrapper-button" type="submit">
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        <ToastContainer />
        <div className="register-link">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <p className="text-danger fw-bolder fs-7 mt-3">
            {error ? error.message || "Something went wrong!" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
