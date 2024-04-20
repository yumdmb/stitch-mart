const Login = () => {
    return(
        <div className="container">
            <div className="header">
                <div className="text"></div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src="person.png" alt="" />
                    <input type="text" />
                </div>
                <div className="input">
                    <img src="email.png" alt="" />
                    <input type="email" />
                </div>
                <div className="input">
                    <img src="password.png" alt="" />
                    <input type="password" />
                </div>
            </div>
        </div>
    )
    
};

export default Login;