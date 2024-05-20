import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';


function SignUp() {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let navigate = useNavigate();  // Create a navigate function

    const handleLoginClick = () => {
        navigate('/login');  // Use navigate to change the route
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register',{userName, email, password})
        .then(result => {console.log(result)
            navigate('/homeAfterLogin')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className='body'>
        <div className="wrapper">
            <form action="">
                <h1>Register Account</h1>
                <div className='input-box'>
                    <input id='input-box' type="text" placeholder='Username' onChange={(e) => setUserName(e.target.value)} required />
                    <i class="bi bi-person-fill"></i>
                </div>
                <div className='input-box'>
                    <input id='input-box' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                    <i class="bi bi-envelope-fill"></i>
                </div>
                <div className='input-box'>
                    <input id='input-box' type="password" placeholder='Password'  onChange={(e) => setPassword(e.target.value)} required />
                    <i class="bi bi-lock-fill"></i>
                </div>
                {/* <div className='remember-forgot'>
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="">Forgot password?</a>
                </div> */}

                <button id='wrapper-button' type='submit' onClick={handleSubmit}>Register</button>

                <div className='register-link'>
                    <p>Already have an account? <a href="" onClick={handleLoginClick}>Log In</a></p>
                </div>
            </form>
        </div>
        </div>
    )
    
};

export default SignUp;