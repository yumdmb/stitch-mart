import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login () {

    let navigate = useNavigate();  // Create a navigate function

    const handleRegsiterClick = () => {
        navigate('/signUp');  // Use navigate to change the route
    };

    const handleLoginClick = () => {
        navigate('/homeAfterLogin');  // Use navigate to change the route
    };

    return(
        <div className='body'>
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                    <i class="bi bi-person-fill"></i>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                    <i class="bi bi-lock-fill"></i>
                </div>
                <div className='remember-forgot'>
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="">Forgot password?</a>
                </div>

                <button type='submit' onClick={handleLoginClick}>Login</button>

                <div className='register-link'>
                    <p>Dont have an account? <a href="" onClick={handleRegsiterClick}>Register</a></p>
                </div>
            </form>
        </div>
        </div>
    )
    
};

export default Login;