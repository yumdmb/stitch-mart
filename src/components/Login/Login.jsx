import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
    return(
        <body className='body'>
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

                <button type='submit'>Login</button>

                <div className='register-link'>
                    <p>Dont have an account? <a href="">Register</a></p>
                </div>
            </form>
        </div>
        </body>
    )
    
};

export default Login;