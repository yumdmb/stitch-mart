import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setUser }) => {
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
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      toast.success("Login successful!");
      dispatch(signInSuccess(data));
      // Delay navigation to the login page
      setTimeout(() => {
        navigate("/");
      }, 3000); // 3 seconds delay
    } catch (error) {
      toast.error("Login failed!");
      dispatch(signInFailure(error));
    }
  };
  return (
    <div className="body">
      <div className="wrapper">
        <form onSubmit={handleSubmit} action="">
          <h1>Login</h1>
          <div className="input-box">
            <input
              className="ps-4 border rounded-5 border-opacity-25"
              id="email"
              type="text"
              placeholder="Email"
              onChange={handleChange}
            />
            <i class="bi bi-person-fill"></i>
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

          <button
            className="mt-3"
            disabled={loading}
            id="wrapper-button"
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? "Loading..." : "Sign In"}
          </button>

          <div className="register-link">
            <p>Dont have an account?</p>
            <Link to="/signup">
              <span>Sign Up</span>
            </Link>
          </div>
        </form>
        <ToastContainer />
        <div>
          <p className="text-danger fw-bolder fs-7 mt-3">
            {error ? error.message || "Something went wrong!" : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
