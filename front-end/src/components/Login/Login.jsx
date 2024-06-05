import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import {useState} from 'react';
import axios from 'axios';

const Login = ({ setUser }) => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        setError(true);
        const res = await fetch('/api/auth/signin',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          credentials: 'include'
        }); 
        const data = await res.json();
        setLoading(false);
        if (data.success === false) {
          return;
        }
        navigate('/homeAfterLogin');
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    return(
        <div className='body'>
        <div className="wrapper">
            <form onSubmit={handleSubmit} action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input id='email' type="text" placeholder='Email' onChange={handleChange}  />
                    <i class="bi bi-person-fill"></i>
                </div>
                <div className='input-box'>
                    <input id='password' type="password" placeholder='Password' onChange={handleChange}  />
                    <i class="bi bi-lock-fill"></i>
                </div>
                <div className='remember-forgot'>
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="">Forgot password?</a>
                </div>

                <button disabled={loading} id='wrapper-button' type='submit' onClick={handleSubmit}>
                    {loading ? 'Loading...' : 'Sign In'}
                </button>

                <div className='register-link'>
                    <p>Dont have an account?</p>
                    <Link to="/signup">
                    <span>Sign Up</span>
                    </Link>
                </div>
            </form>
        </div>
        </div>
    )
    
};

export default Login;