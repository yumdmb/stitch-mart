import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(true);
      const res = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        return;
      }
      navigate("/");
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="body">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Register Account</h1>
          <div className="input-box">
            <input
              id="username"
              type="text"
              placeholder="Username"
              onChange={handleChange}
            />
            <i class="bi bi-person-fill"></i>
          </div>
          <div className="input-box">
            <input
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
          {/* <div className='remember-forgot'>
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="">Forgot password?</a>
                </div> */}

          <button disabled={loading} id="wrapper-button" type="submit">
            {loading ? "Loading..." : "Sign Up"}
          </button>

          <div className="register-link">
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
