import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import {useState} from 'react';
import axios from 'axios';

function Login () {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();


    let navigate = useNavigate();  // Create a navigate function

    const handleRegsiterClick = () => {
        navigate('/signUp');  // Use navigate to change the route
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login',{userName, password})
        .then(result => {console.log(result)
            if(result.data === "Success") {
                navigate('/homeAfterLogin')
            } 
        })
        .catch(err => console.log(err))
    }

    return(
        <div className='body'>
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input id='input-box' type="text" placeholder='Username' onChange={(e) => setUserName(e.target.value)} required />
                    <i class="bi bi-person-fill"></i>
                </div>
                <div className='input-box'>
                    <input id='input-box' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                    <i class="bi bi-lock-fill"></i>
                </div>
                <div className='remember-forgot'>
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="">Forgot password?</a>
                </div>

                <button id='wrapper-button' type='submit' onClick={handleSubmit}>Login</button>

                <div className='register-link'>
                    <p>Dont have an account? <a href="" onClick={handleRegsiterClick}>Register</a></p>
                </div>
            </form>
        </div>
        </div>
    )
    
};

export default Login;