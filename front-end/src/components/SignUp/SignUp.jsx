import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';


function SignUp() {
    
    let navigate = useNavigate();  // Create a navigate function

    const handleLoginClick = () => {
        navigate('/login');  // Use navigate to change the route
    };

    const handleSignUpClick = () => {
        navigate('/homeAfterLogin');  // Use navigate to change the route
    };
    
    return(
        <div className='body'>
        <div className="wrapper">
            <form action="">
                <h1>Register Account</h1>
                <div className='input-box'>
                    <input id='input-box' type="text" placeholder='Username' required />
                    <i class="bi bi-person-fill"></i>
                </div>
                <div className='input-box'>
                    <input id='input-box' type="email" placeholder='Email' required />
                    <i class="bi bi-envelope-fill"></i>
                </div>
                <div className='input-box'>
                    <input id='input-box' type="password" placeholder='Password' required />
                    <i class="bi bi-lock-fill"></i>
                </div>
                {/* <div className='remember-forgot'>
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="">Forgot password?</a>
                </div> */}

                <button id='wrapper-button' type='submit' onClick={handleSignUpClick}>Register</button>

                <div className='register-link'>
                    <p>Already have an account? <a href="" onClick={handleLoginClick}>Log In</a></p>
                </div>
            </form>
        </div>
        </div>
    )
    
};

export default SignUp;